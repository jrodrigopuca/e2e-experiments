# Introducción

## Instalar Playwright

`npm i -D playwright`

## Comparación

Tabla comparativa

## Configuración

```js
import { defineConfig, devices } from "@playwright/test";
import path from "path";
// Use process.env.PORT by default and fallback to port 3000
const PORT = process.env.PORT || "3000";

// Set webServer.url and use.baseURL with the location of the WebServer respecting the correct set port
const baseURL = `http://localhost:${PORT}`;
// Reference: https://playwright.dev/docs/test-configuration
export default defineConfig({
	// Timeout per test
	timeout: 10 * 1000,
	// Test directory
	testDir: path.join(__dirname, "e2e"),
	// If a test fails, retry it additional 2 times
	retries: 2,
	// Artifacts folder where screenshots, videos, and traces are stored.
	outputDir: "test-results/",

	// Run your local dev server before starting the tests:
	// https://playwright.dev/docs/test-advanced#launching-a-development-web-server-during-the-tests
	webServer: {
		command: "npm run dev",
		url: baseURL,
		timeout: 12 * 1000,
		reuseExistingServer: !process.env.CI,
	},

	use: {
		// Use baseURL so to make navigations relative.
		// More information: https://playwright.dev/docs/api/class-testoptions#test-options-base-url
		baseURL,

		// Retry a test if its failing with enabled tracing. This allows you to analyze the DOM, console logs, network traffic etc.
		// More information: https://playwright.dev/docs/trace-viewer
		trace: "retry-with-trace",

		// All available context options: https://playwright.dev/docs/api/class-browser#browser-new-context
		// contextOptions: {
		//   ignoreHTTPSErrors: true,
		// },
	},

	projects: [
		{
			name: "Desktop Chrome",
			use: {
				...devices["Desktop Chrome"],
			},
		},
	],
});
```

### Headless y Headed

- Headless: por consola (por defecto)
- Headed: con interfaz gráfica
  Playwright permite ejecutar pruebas tanto en modo headless (sin interfaz gráfica) como en modo headed (con interfaz gráfica). El modo headless es útil para ejecuciones de pruebas en servidores o para integración continua, mientras que el modo headed es excelente para el desarrollo de pruebas y la depuración.
  Esta configuración puede realizarse desde el config de playwright.

```js
	projects: [
		{
			name: "Desktop Chrome",
			use: {
				...devices["Desktop Chrome"],
				headless: false,
			},
		},
```

## Agregar como script

Se debe agregarlo en el package.json

```js
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "e2e": "playwright test"
  },
```

## Prueba simple

```js
test("test de prueba", async ({ page }) => {
	await page.goto("https://playwright.dev/"); //visitar página
	const title = await page.locator("h1"); //obtener encabezado
	await expect(title).toContainText("Playwright"); // verificar que incluya un texto
});
```

## Tomar captura de pantalla

```js
test("test de prueba", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await page.screenshot({ path: "screenshots/playwright.png" }); //realiza la captura de pantalla
	const title = await page.locator("h1");
	await expect(title).toContainText("Playwright");
});
```

## Captura de video

La grabación de videos de las sesiones de prueba puede ser invaluable para la depuración y para entender el comportamiento de la aplicación durante las pruebas automatizadas.
Para grabar un video de la sesión, necesitas configurar el contexto para que grabe

Para grabar todas las pruebas

```js
	projects: [
		{
			name: "Desktop Chrome",
			use: {
				...devices["Desktop Chrome"],
				headless: true,
				contextOptions: {
					recordVideo: {
						dir: "test-results/videos",
						size: { width: 1920, height: 1080 },
					},
				},
			},
		},
```

Para grabar un test en específico
Ejemplo en 01-inicial-con-video.spec.ts

```js
test("test de prueba con video", async ({ browser }) => {
	// Crear un nuevo contexto con la configuración de grabación de video activada
	const context = await browser.newContext({
		// Configura la grabación de video
		recordVideo: {
			dir: "test-results/videos/", // Directorio donde se guardarán los videos
			size: { width: 1280, height: 720 }, // Dimensiones del video
		},
	});

	const page = await context.newPage();

	await page.goto("https://playwright.dev/");

	const title = await page.locator("h1");
	await expect(title).toContainText("Playwright");
	// Cierra el contexto, lo cual finaliza la grabación del video
	await context.close();
});
```

## Modelo de Objetos en Playwright

Playwright opera principalmente con tres objetos: Browser, Context y Page. Para ver como funcionan en conjunto, ver --> 01-dos-contextos.spec.ts

### Browser

Representa una instancia del navegador. Puede contener múltiples contextos de navegador.

### Context

- Un contexto de navegador es una instancia independiente dentro del navegador. Puedes pensar en cada contexto como una sesión de navegador individual, aislada de otras sesiones.
- Los contextos son útiles para pruebas que necesitan aislar cookies, almacenamiento local, y sesiones entre pruebas.

### Page

- Un objeto de página representa una sola pestaña dentro de un contexto de navegador. Aquí es donde la mayoría de las interacciones de prueba ocurren, como navegación, clics, y entradas de texto.
