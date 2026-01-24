# Sistema de Gestión Eléctrica - Cooperativa Ugarte

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript&logoColor=white) ![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js&logoColor=white) ![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-14+-4169E1?style=flat-square&logo=postgresql&logoColor=white) ![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=flat-square&logo=docker&logoColor=white)

**Sistema integral de gestión para cooperativas eléctricas**  
*Gestión de socios · Facturación de deudas · Panel de reclamos*

[Ver Demo](#) · [Documentación](./docs) · [Reportar Bug](#)

</div>

---

## Tabla de Contenidos

- [Origen y Créditos](#origen-y-créditos)
- [Diferenciación de Portfolio](#diferenciación-de-portfolio)
- [Sobre el Proyecto](#sobre-el-proyecto)
- [Características Principales](#características-principales)
- [Stack Tecnológico](#stack-tecnológico)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Instalación](#instalación)
- [Uso](#uso)
- [Testing](#testing)
- [Roadmap](#roadmap)

---

## Origen y Créditos

> **Este proyecto nació como parte del trabajo final de la cátedra Proyecto Profesional IV (PPIV)** en la Tecnicatura Superior en Desarrollo de Software del IFTS 29.

### Repositorio Original

El código fuente original del proyecto grupal se encuentra en:  
**[https://github.com/damianclausi/PPIV](https://github.com/damianclausi/PPIV)**

### Equipo Original

Este sistema fue desarrollado por un equipo de estudiantes durante el ciclo académico 2025:

- **Damián Clausi** 
- **Descosido Cristian**
- **Gill Cesar Antonio**

### Agradecimientos Especiales

Un agradecimiento especial a todos los integrantes del equipo por su dedicación, creatividad y esfuerzo colaborativo durante el desarrollo inicial. Sin su contribución, este proyecto no hubiera sido posible.

---

## Diferenciación de Portfolio

### ¿Por qué existe este repositorio?

Este repositorio (`cooperativa-electrica-gestion`) es mi **versión personal de portfolio** derivada del proyecto académico original. Fue creado con los siguientes objetivos:

#### Propósito Profesional

- **Nombre descriptivo**: Cambio de `PPIV` (nombre académico) a `cooperativa-electrica-gestion` 
- **Portfolio profesional**: Diseñado específicamente para ser presentado a reclutadores y empleadores
- **Demostración de habilidades**: Muestra mi capacidad de mantener, mejorar y desplegar aplicaciones complejas de forma independiente

#### Mejoras Implementadas

En esta versión personal he realizado:

- **Mantenimiento continuo**: Corrección de bugs y optimizaciones de rendimiento
- **Dashboard mejorado**: Visualizaciones de datos más claras y efectivas
- **Deployment optimizado**: CI/CD con GitHub Actions
- **Documentación profesional**: Guías técnicas completas para desarrolladores


---

## Sobre el Proyecto

### Sistema de Gestión Eléctrica (SGE)

Este es un **sistema integral de gestión** diseñado para cooperativas eléctricas, específicamente desarrollado para la Cooperativa Eléctrica "Gobernador Ugarte". El sistema digitaliza y optimiza los procesos operativos, administrativos y de atención al cliente de la cooperativa.

### Problema que Resuelve

Las cooperativas eléctricas tradicionalmente manejan sus operaciones con sistemas legacy o procesos manuales. Este SGE moderniza:

- Gestión manual de socios y clientes
- Facturación y control de deudas en papel
- Registro de reclamos disperso
- Asignación ineficiente de órdenes de trabajo a operarios
- Falta de métricas y reportes en tiempo real

### Solución Implementada

Un sistema web completo con **tres perfiles de usuario integrados**:

1. **Cliente/Socio**: Gestión de servicios personales
2. **Operario**: Panel de trabajo y reclamos asignados
3. **Administrativo**: Vista global y gestión integral

---

## Características Principales

### Módulo de Clientes

- Dashboard personalizado con resumen de servicios
- Visualización de facturas y estado de deudas
- Creación y seguimiento de reclamos en tiempo real
- Historial completo de consumos

### Módulo de Operarios

- Panel de órdenes de trabajo asignadas
- Gestión de reclamos por estado (Pendiente, En Proceso, Resuelto)
- Carga de insumos utilizados
- Métricas de productividad personal

### Módulo Administrativo

- Dashboard ejecutivo con KPIs del sistema
- ABM completo de socios/clientes
- Gestión integral de reclamos del sistema
- Administración de empleados y operarios
- Planificación de itinerarios de relevamiento
- Reportes y estadísticas detalladas
- Facturación masiva y control de deudas

### Características Técnicas Destacadas

- **Autenticación JWT** con bcrypt para seguridad
- **Componentes Radix UI** con accesibilidad completa
- **Diseño 100% responsive** (desktop, tablet, mobile)
- **Preparado para modo oscuro** (Next Themes)
- **Visualizaciones dinámicas** con Recharts
- **Dockerizado** para desarrollo y producción
- **413+ tests automatizados** (Jest, Vitest, Supertest)
- **API RESTful** con Express y arquitectura MVC

---

## Stack Tecnológico

### Frontend

```yaml
Core:
  - React 18.3.1 con TypeScript
  - Vite 6.3.5 (Build tool + React SWC)

UI Framework:
  - Tailwind CSS v4.1.3
  - Shadcn/ui + Radix UI (componentes accesibles)
  - Lucide React 0.487.0 (iconografía)

Librerías:
  - React Hook Form 7.55.0 (formularios)
  - Recharts 2.15.2 (gráficos)
  - Sonner 2.0.3 (notificaciones)
  - Next Themes 0.4.6 (temas)
```

### Backend

```yaml
Core:
  - Node.js 18+
  - Express 4.x
  - TypeScript

Base de Datos:
  - PostgreSQL 14+
  - Docker (contenedor local)

Autenticación:
  - JWT (jsonwebtoken)
  - bcrypt (hashing de contraseñas)

Testing:
  - Jest (tests unitarios e integración)
  - Supertest (tests de API)
```

### Arquitectura

```
Proyecto
├── Frontend (React + Vite)
│   ├── src/components/ui/          # Componentes reutilizables
│   ├── src/components/cliente/     # Módulo de clientes
│   ├── src/components/operario/    # Módulo de operarios
│   └── src/components/admin/       # Módulo administrativo
│
├── Backend (Express + PostgreSQL)
│   ├── api/_lib/models/            # Modelos de datos
│   ├── api/_lib/controllers/       # Lógica de negocio
│   ├── api/_lib/routes/            # Definición de rutas
│   └── api/_lib/middleware/        # Autenticación y validación
│
└── Documentación
    ├── docs/API.md                 # Documentación de endpoints
    ├── docs/DATABASE.md            # Esquema de base de datos
    └── docs/TESTING.md             # Guía de testing
```

---

## Capturas de Pantalla

### Dashboard de Cliente
![Dashboard Cliente](./docs/screenshots/dashboard-cliente.png)
*Vista principal del cliente con resumen de servicios y reclamos activos*

### Panel de Operario
![Panel Operario](./docs/screenshots/panel-operario.png)
*Gestión de órdenes de trabajo y reclamos asignados*

### Dashboard Administrativo
![Dashboard Admin](./docs/screenshots/dashboard-admin.png)
*Vista ejecutiva con métricas del sistema y gestión integral*

### Gestión de Reclamos
![Reclamos](./docs/screenshots/gestion-reclamos.png)
*Sistema de seguimiento de reclamos en tiempo real*

> **Nota**: Las capturas de pantalla se irán actualizando conforme evolucione el diseño.

---

## Instalación

### Requisitos Previos

Antes de comenzar, asegurate de tener instalado:

- **Node.js** 18+ y npm ([Descargar](https://nodejs.org/))
- **Docker** y Docker Compose ([Descargar](https://docs.docker.com/engine/install/))
- **Git** ([Descargar](https://git-scm.com/))

### Clonar el Repositorio

```bash
git clone https://github.com/damianclausi/cooperativa-electrica-gestion.git
cd cooperativa-electrica-gestion
```

### Instalar Dependencias

```bash
# Frontend
npm install

# Backend
cd api
npm install
cd ..
```

### Configurar Variables de Entorno

#### Backend - Crear `api/.env`

```env
PORT=3001
DATABASE_URL=postgresql://coop_user:cooperativa2024@localhost:5432/cooperativa_ugarte_db
JWT_SECRET=tu-secreto-jwt-super-seguro-cambiar-en-produccion
NODE_ENV=development
```

#### Frontend - Crear `.env`

```env
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Sistema de Gestión - Cooperativa Eléctrica
```

### Iniciar Base de Datos

```bash
# Opción A: Script automatizado (Recomendado)
./update-docker.sh

# Opción B: Docker Compose
docker-compose up -d
```

El script descarga una imagen PostgreSQL preconfigurada con:
- 6 clientes de prueba
- 5 empleados (3 operarios + 2 administradores)
- 30 reclamos de ejemplo
- 23 órdenes de trabajo
- Esquema completo de base de datos

### Iniciar el Sistema

```bash
# Iniciar todo (backend + frontend)
./start.sh

# Verificar estado
./status.sh
```

Deberías ver:
```
✅ Backend:    CORRIENDO en puerto 3001
✅ Frontend:   CORRIENDO en puerto 3002
✅ PostgreSQL: CORRIENDO (contenedor cooperativa-db)
🎉 Sistema completamente operativo
```

### Acceder al Sistema

- **Frontend**: [http://localhost:3002](http://localhost:3002)
- **Backend API**: [http://localhost:3001](http://localhost:3001)
- **PostgreSQL**: `localhost:5432`

---

## Uso

### Usuarios de Prueba

El sistema incluye **11 usuarios preconfigurados** para testing:

#### Clientes (6 usuarios)

| Email | Nombre | Password |
|-------|--------|----------|
| `mariaelena.gonzalez@hotmail.com` | María Elena González | `password123` |
| `robertocarlos.martinez@gmail.com` | Roberto Carlos Martínez | `password123` |
| `anapaula.fernandez@yahoo.com` | Ana Paula Fernández | `password123` |
| `juanmanuel.lopez@outlook.com` | Juan Manuel López | `password123` |
| `silviaraquel.rodriguez@gmail.com` | Silvia Raquel Rodríguez | `password123` |
| `carlosalberto.sanchez@hotmail.com` | Carlos Alberto Sánchez | `password123` |

#### Operarios (3 usuarios)

| Email | Nombre | Password |
|-------|--------|----------|
| `pedro.electricista@cooperativa-ugarte.com.ar` | Pedro Ramón García | `password123` |
| `juan.operario@cooperativa-ugarte.com.ar` | Juan Carlos Pérez | `password123` |
| `luis.tecnico@cooperativa-ugarte.com.ar` | Luis Alberto Gómez | `password123` |

#### Administradores (2 usuarios)

| Email | Nombre | Password |
|-------|--------|----------|
| `monica.administradora@cooperativa-ugarte.com.ar` | Mónica Administradora | `password123` |
| `carlos.admin@cooperativa-ugarte.com.ar` | Carlos Alberto Admin | `password123` |

### Scripts de Gestión

| Script | Descripción |
|--------|-------------|
| `./start.sh` | Inicia backend y frontend |
| `./stop.sh` | Detiene todos los servicios |
| `./restart.sh` | Reinicia el sistema completo |
| `./status.sh` | Muestra estado del sistema |
| `./logs.sh` | Ver logs (backend\|frontend\|all\|errors) |
| `./update-docker.sh` | Actualiza imagen Docker desde Docker Hub |

### Ver Logs

```bash
# Todos los logs en tiempo real
./logs.sh all

# Solo backend
./logs.sh backend

# Solo frontend
./logs.sh frontend

# Solo errores
./logs.sh errors
```

---

## Testing

El proyecto cuenta con una **suite completa de 413+ tests** automatizados:

```bash
# Ejecutar todos los tests
npm run test:all

# Tests del backend (Jest)
npm run test:backend

# Tests del frontend (Vitest)
npm run test:frontend

# Tests con cobertura
npm run test:coverage

# Tests en modo watch
npm test
```

### Cobertura de Tests

- **Backend**: ~357 tests (unitarios + integración)
- **Frontend**: 56 tests (servicios, hooks, componentes)
- **Total**: 413+ tests pasando

Ver la [documentación completa de testing](./docs/TESTING.md) para más detalles.

---

## Roadmap

### Completado (v1.0 - Production Ready)

- Sistema de autenticación multi-perfil
- CRUD completo de socios/clientes
- Gestión de reclamos con asignación
- Dashboard administrativo con KPIs
- Exportación de reportes PDF
- Módulo de operarios funcional
- API RESTful documentada
- Suite de tests completa (413+)
- Dockerización de base de datos
- Deployment en Vercel
- Documentación técnica

### En Desarrollo (v1.1)

- Sistema de notificaciones push
- Notificaciones de cortes programados
- Toma de estados de medidores en campo

### Futuro (v2.0)

- Integración con pasarelas de pago
- Dashboard con gráficos en tiempo real
- Sistema de geolocalización de operarios
- Chat en tiempo real (operario-cliente)
- API pública para integraciones

---

## Contribuciones

Este es un proyecto de portfolio personal, pero las sugerencias y feedback son bienvenidos:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## Contacto

**Damián Clausi**

- LinkedIn: [linkedin.com/in/damianclausi](https://linkedin.com/in/damianclausi)
- GitHub: [@damianclausi](https://github.com/damianclausi)
- Portfolio: [damianclausi.dev](https://damianclausi.dev)

---

## Enlaces Relevantes

- **Repositorio Original (Grupal)**: [github.com/damianclausi/PPIV](https://github.com/damianclausi/PPIV)
- **Demo en Vivo**: [cooperativa-gestion.vercel.app](#)
- **Documentación API**: [docs/API.md](./docs/API.md)
- **Guía de Base de Datos**: [docs/DATABASE.md](./docs/DATABASE.md)
- **Guía de Testing**: [docs/TESTING.md](./docs/TESTING.md)

---
