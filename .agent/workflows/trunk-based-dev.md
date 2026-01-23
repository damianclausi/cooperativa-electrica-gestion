---
description: Flujo de trabajo Trunk-Based Development para el proyecto
---

# Trunk-Based Development Workflow

Este workflow define cómo trabajar con Git siguiendo la metodología Trunk-Based Development (TBD).

## Principios Fundamentales

- **Una sola rama principal**: `main` es la única rama de larga duración
- **Ramas de vida corta**: Las feature branches deben durar máximo 1-2 días
- **Integración continua**: Commits pequeños y frecuentes
- **Código siempre desplegable**: `main` debe estar siempre en estado funcional

---

## Flujo 1: Cambios Pequeños (Hotfixes, Ajustes Menores)

Para cambios que toman menos de 1 hora, trabajar directamente en `main`:

// turbo
1. Actualizar la rama main
```bash
git checkout main && git pull origin main
```

2. Realizar los cambios en el código

3. Agregar y commitear los cambios
```bash
git add .
git commit -m "fix: descripción breve del cambio"
```

4. Subir los cambios
```bash
git push origin main
```

---

## Flujo 2: Features (Máximo 1-2 días)

Para funcionalidades nuevas que requieren más tiempo:

// turbo
1. Actualizar main y crear rama de feature
```bash
git checkout main && git pull origin main
git checkout -b feature/nombre-descriptivo-corto
```

2. Trabajar en la feature con commits frecuentes
```bash
git add .
git commit -m "feat: descripción del progreso"
```

3. Mantener la rama actualizada con main (hacer esto al menos 1 vez al día)
```bash
git fetch origin main
git rebase origin/main
```

4. Subir la rama y crear Pull Request
```bash
git push origin feature/nombre-descriptivo-corto
```

5. Después del merge, limpiar la rama
// turbo
```bash
git checkout main && git pull origin main
git branch -d feature/nombre-descriptivo-corto
```

---

## Flujo 3: Bugfixes Urgentes

Para correcciones críticas en producción:

// turbo
1. Crear rama desde main
```bash
git checkout main && git pull origin main
git checkout -b fix/descripcion-del-bug
```

2. Aplicar la corrección y commitear
```bash
git add .
git commit -m "fix: corregir [descripción del problema]"
```

3. Subir y crear PR para revisión rápida
```bash
git push origin fix/descripcion-del-bug
```

4. Después del merge, limpiar
// turbo
```bash
git checkout main && git pull origin main
git branch -d fix/descripcion-del-bug
```

---

## Convenciones de Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/):

| Prefijo    | Uso                                      |
|------------|------------------------------------------|
| `feat:`    | Nueva funcionalidad                      |
| `fix:`     | Corrección de bugs                       |
| `docs:`    | Cambios en documentación                 |
| `style:`   | Formateo, sin cambios de lógica          |
| `refactor:`| Refactorización de código                |
| `test:`    | Agregar o modificar tests                |
| `chore:`   | Tareas de mantenimiento                  |

Ejemplo: `feat: agregar validación de email en formulario de registro`

---

## Convenciones de Nombres de Ramas

- `feature/nombre-corto` - Para nuevas funcionalidades
- `fix/descripcion-bug` - Para correcciones
- `docs/que-se-documenta` - Para documentación
- `refactor/que-se-refactoriza` - Para refactorizaciones

**Reglas:**
- Usar minúsculas
- Separar palabras con guiones `-`
- Máximo 3-4 palabras descriptivas

---

## Comandos Útiles

// turbo
### Ver estado del repositorio
```bash
git status && git log --oneline -5
```

// turbo
### Ver ramas locales y remotas
```bash
git branch -a
```

// turbo
### Limpiar ramas locales ya mergeadas
```bash
git branch --merged main | grep -v "main" | xargs -r git branch -d
```

// turbo
### Actualizar lista de ramas remotas
```bash
git fetch --all --prune
```

---

## Tips para TBD Exitoso

1. **Commits pequeños**: Mejor 5 commits pequeños que 1 gigante
2. **Push frecuente**: Al menos 1 vez al día
3. **Revisar PRs rápido**: Las PRs no deben quedarse más de 1 día
4. **Tests antes de push**: Ejecutar tests localmente antes de subir
5. **Feature flags**: Si una feature toma más de 2 días, usar feature flags para esconderla
