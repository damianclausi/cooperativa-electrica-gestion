# Anexo: Configuración Crítica de Conexión (Vercel - Supabase)

Este documento complementa el manual de despliegue original para resolver problemas de conectividad en entornos Serverless (Vercel) causados por la falta de compatibilidad IPv4 directa en nuevas instancias de Supabase.

## 1. Problema Identificado

Al utilizar la "Direct Connection" (puerto 5432) sugerida inicialmente en la documentación, las funciones de Vercel pueden fallar con un error `500 Internal Server Error` y el log técnico `ENOTFOUND` o `getaddrinfo`. Esto ocurre porque Vercel no siempre puede resolver direcciones IPv6 puras.

## 2. Solución: Uso de Connection Pooler (Puerto 6543)

Para garantizar la estabilidad del sistema de gestión, es obligatorio cambiar el método de conexión a **Transaction Mode**. Esto permite que las funciones de Vercel se comuniquen a través de un pool de conexiones compatible con IPv4.

### Pasos para actualizar la configuración:

1.  **Obtener la URI de Transacción en Supabase:**
    *   Ve a **Project Settings** > **Database**.
    *   En la sección **Connection String**, asegúrate de que el tipo sea **URI**.
    *   Cambia el **Method** de "Direct connection" a **Transaction** (esto es crucial).
    *   Copia la cadena de conexión. Notarás que el puerto ahora es **6543** y el host incluye `.pooler.supabase.com`.

2.  **Codificación de Contraseña:**
    *   Si tu contraseña de base de datos contiene caracteres especiales (ej: `@`, `#`, `!`), debes codificarlos para la URL (URL Encoding).
    *   Ejemplo: `@` se convierte en `%40`.

3.  **Actualización de Variables de Entorno en Vercel:**
    *   Ingresa a tu proyecto en Vercel y ve a **Settings** > **Environment Variables**.
    *   Actualiza la variable `DATABASE_URL` con el nuevo formato:
        `postgresql://postgres:[TU_PASSWORD_CODIFICADO]@[HOST_DEL_POOLER]:6543/postgres?sslmode=require`
    *   **Nota:** Es indispensable añadir `?sslmode=require` al final de la cadena para asegurar la conexión.

4.  **Redespliegue:**
    *   Para que los cambios surtan efecto, realiza un **Redeploy** manual desde la pestaña **Deployments** en Vercel.

## 3. Verificación de Variables

Asegúrate de que las siguientes variables de entorno en Vercel coincidan con la configuración de producción del sistema:

| Variable | Descripción | Valor Sugerido |
| :--- | :--- | :--- |
| `DATABASE_URL` | Conexión al Pooler de Supabase | `postgresql://...:6543/postgres?sslmode=require` |
| `NODE_ENV` | Entorno de ejecución | `production` |
| `FRONTEND_URL` | URL pública de la app | `https://[tu-app].vercel.app` |
| `JWT_SECRET` | Clave para tokens de seguridad | Una cadena aleatoria segura |

> [!IMPORTANT]
> Este anexo es de carácter obligatorio para despliegues realizados a partir de enero de 2026 debido a los cambios en la infraestructura de red de Supabase.
