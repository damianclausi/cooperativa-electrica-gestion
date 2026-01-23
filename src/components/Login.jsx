import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { Mail, Lock } from 'lucide-react';
import logoImage from '../assets/brand/logo.jpeg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(() => {
    // Recuperar error de localStorage si existe
    return localStorage.getItem('loginError') || '';
  });
  const [cargando, setCargando] = useState(false);
  const [mostrarError, setMostrarError] = useState(() => {
    // Recuperar estado de error de localStorage si existe
    return localStorage.getItem('loginError') ? true : false;
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  // Persistir error en localStorage
  useEffect(() => {
    if (error && mostrarError) {
      localStorage.setItem('loginError', error);
    } else {
      localStorage.removeItem('loginError');
    }
  }, [error, mostrarError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Limpiar error previo
    setError('');
    setMostrarError(false);
    localStorage.removeItem('loginError');
    setCargando(true);

    try {
      await login(email, password);
      // Limpiar cualquier error antes de navegar
      localStorage.removeItem('loginError');
      navigate('/dashboard');
    } catch (err) {
      // Extraer el mensaje de error más específico
      const mensajeError = err.message || err.details?.mensaje || err.details?.error || 'Error al iniciar sesión';

      // Guardar en localStorage inmediatamente
      localStorage.setItem('loginError', mensajeError);
      setError(mensajeError);
      setMostrarError(true);

      // Prevenir cualquier navegación
      e.stopPropagation();
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cooperativa-gradient px-4 py-8 sm:py-12">
      {/* Logo y Título Superior */}
      <div className="absolute top-4 sm:top-8 left-0 right-0 text-center px-4">
        <div className="flex justify-center mb-2 sm:mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-2 sm:p-4 shadow-xl">
            <img
              src={logoImage}
              alt="Logo Cooperativa"
              className="h-12 w-12 sm:h-16 sm:w-16 object-contain"
            />
          </div>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
          Cooperativa Eléctrica
        </h1>


      </div>

      {/* Card de Login */}
      <Card className="w-full max-w-md shadow-2xl border-0 mt-28 sm:mt-32">
        <CardHeader className="space-y-1 bg-gradient-to-r from-cooperativa-dark to-cooperativa-blue text-white rounded-t-lg p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-2xl font-bold text-center">
            Iniciar Sesión
          </CardTitle>
          <CardDescription className="text-center text-white/90 text-sm sm:text-base">
            Ingresa tus credenciales para acceder al sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
          {mostrarError && error && (
            <div className="fixed top-4 left-4 right-4 sm:left-1/2 sm:right-auto sm:transform sm:-translate-x-1/2 z-[9999] sm:w-full sm:max-w-md">
              <Alert variant="destructive" className="border-4 border-red-600 bg-red-100 shadow-2xl relative">
                <button
                  onClick={() => {
                    setMostrarError(false);
                    setError('');
                    localStorage.removeItem('loginError');
                  }}
                  className="absolute top-2 right-2 text-red-900 hover:text-red-700 font-bold text-xl"
                  type="button"
                >
                  ×
                </button>
                <AlertDescription className="text-red-900 font-extrabold text-center py-3 sm:py-4 pr-8 flex flex-col items-center gap-2 sm:gap-3">
                  <span className="text-3xl sm:text-5xl">⚠️</span>
                  <span className="text-base sm:text-lg leading-tight">{error}</span>
                  <span className="text-xs sm:text-sm font-normal text-red-700 mt-1 sm:mt-2">
                    Click en la X para cerrar este mensaje
                  </span>
                </AlertDescription>
              </Alert>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-cooperativa-dark flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={cargando}
                className="border-cooperativa-blue/30 focus:border-cooperativa-blue focus:ring-cooperativa-blue"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-cooperativa-dark flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Contraseña
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={cargando}
                className="border-cooperativa-blue/30 focus:border-cooperativa-blue focus:ring-cooperativa-blue"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-cooperativa-blue hover:bg-cooperativa-light text-white font-semibold py-2.5 shadow-lg transition-all duration-200"
              disabled={cargando}
            >
              {cargando ? (
                <span className="flex items-center justify-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Iniciando sesión...
                </span>
              ) : (
                'Iniciar Sesión'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 text-center px-4">
        <p className="text-white/80 text-xs sm:text-sm">
          © 2025 Cooperativa Eléctrica Gobernador Ugarte
        </p>
      </div>
    </div>
  );
}
