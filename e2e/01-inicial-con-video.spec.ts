import { test, expect } from "@playwright/test";
test.skip("test de prueba con video", async ({ browser }) => {
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
