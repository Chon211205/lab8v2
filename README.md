# Password Strength Meter

Proyecto desarrollado con React, Vite, Vitest y React Testing Library aplicando el flujo de trabajo Test Driven Development.

## Instalación

Para instalar las dependencias del proyecto:

```bash
bun install
Correr los tests

Para ejecutar los tests:

bun run test

Para ejecutar los tests una sola vez:

bun run test -- --run
Correr el proyecto en modo desarrollo

Para iniciar el servidor de desarrollo:

bun run dev

Luego abre en el navegador la URL que muestra Vite, normalmente:

http://localhost:5173/
Flujo TDD seguido

El desarrollo siguió el flujo Test Driven Development:

Primero se configuró el proyecto con Vite, Vitest, React Testing Library y jsdom.
Luego se escribieron los tests basados en los requerimientos antes de implementar la funcionalidad.
Se ejecutaron los tests y fallaron inicialmente.
Se hizo un commit con los tests fallando.
Después se implementó la lógica y el componente React.
Finalmente se volvieron a ejecutar los tests hasta que todos pasaron.

El historial de commits muestra este flujo, con un commit de tests fallando antes del commit de implementación.
