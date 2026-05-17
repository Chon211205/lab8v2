# Password Strength Meter

Proyecto desarrollado con React, Vite, Vitest y React Testing Library aplicando el flujo de trabajo Test Driven Development.

## Instalación

Para instalar las dependencias del proyecto, ejecuta:

```bash
bun install
```

## Correr los tests

Para ejecutar los tests del proyecto, ejecuta:

```bash
bun run test
```

Para ejecutar los tests una sola vez, por ejemplo en CI, ejecuta:

```bash
bun run test -- --run
```

## Correr el proyecto en modo desarrollo

Para iniciar el servidor de desarrollo, ejecuta:

```bash
bun run dev
```

Luego abre en el navegador la URL que muestra Vite en la terminal.

Normalmente será:

```txt
http://localhost:5173/
```

## Flujo TDD seguido

El proyecto fue desarrollado siguiendo el flujo Test Driven Development.

Primero se configuró el proyecto con Vite, Vitest, React Testing Library y jsdom. Después se escribieron los tests basados en los requerimientos antes de implementar la funcionalidad.

Luego se ejecutaron los tests para confirmar que fallaban inicialmente. Ese estado fue guardado en un commit para evidenciar la etapa roja del ciclo TDD.

Después se implementó la lógica de fortaleza de contraseña y el componente React hasta que todos los tests pasaron. Finalmente, se realizaron ajustes visuales y mejoras manteniendo los tests en verde.

El historial de commits evidencia este flujo, ya que contiene un commit con los tests fallando antes del commit de implementación.

## Comandos principales

```bash
bun install
bun run dev
bun run test
bun run test -- --run
```
## Puntos extra implementado:
- (5 puntos) Agregar un test que verifique que el input es accesible utilizando queries por rol o label.
- (5 puntos) Mostrar visualmente la fortaleza con una barra de progreso además del texto, con sus tests correspondientes.
- (5 puntos) Agregar una regla adicional de fortaleza que considere mayúsculas y minúsculas mezcladas, con sus tests correspondientes.
- (5 puntos) Configurar coverage con Vitest e incluir un script para generar el reporte.
- (5 puntos) Configurar un script de lint y aplicarlo al proyecto.
