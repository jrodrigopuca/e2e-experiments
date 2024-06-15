import { test, chromium } from "@playwright/test";

test.skip("Abrir dos sitios en diferentes contextos", async ({}) => {
	const browser = await chromium.launch({ headless: false });

	// Crear el primer contexto y cargar Google
	const context1 = await browser.newContext();
	const page1 = await context1.newPage();
	await page1.goto("https://www.google.com");
	console.log("First page loaded:", await page1.title());

	// Crear el segundo contexto y cargar Bing
	const context2 = await browser.newContext();
	const page2 = await context2.newPage();
	await page2.goto("https://www.bing.com");
	console.log("Second page loaded:", await page2.title());

	// Asumir que no necesitamos interactuar más con las páginas
	await browser.close();
});
