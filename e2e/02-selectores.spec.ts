import { test, expect } from "@playwright/test";
import { URL } from "./utils";
test("debería ir a la página verde", async ({ page }) => {
	await page.goto(URL);
	await page.click("button#green-btn");
	await expect(page).toHaveURL(`${URL}/green`);

	// Selector CSS: Selecciona el encabezado principal por la etiqueta h1
	const header1 = await page.$("h1");
	expect(await header1?.innerText()).toBe("Página verde");

	// Selector XPath: Selecciona el segundo encabezado por la etiqueta h2
	const header2 = await page.$("//h2");
	expect(await header2?.innerText()).toBe("Texto en verde");

	// Selector Text: Selecciona el párrafo por el texto
	const paragraph = await page.$("text=Más info");
	expect(await paragraph?.innerText()).toBe("Más info");
});
