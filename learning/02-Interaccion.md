# Manipulación de Elementos y Asertivas

## Selección de Elementos

En Playwright se tienen las siguientes opciones para seleccionar algo:
• Selector CSS: $('h1') busca el primer elemento <h1> en la página. Es útil para seleccionar elementos por etiquetas, clases, ID, etc.
• Selector XPath: $('//h2') selecciona el primer elemento <h2>, pero usando XPath. Esto es particularmente útil para navegaciones más complejas que no se pueden expresar fácilmente con selectores CSS.
• Selector de Texto: $('text="Más info"') encuentra un enlace cuyo texto visible es exactamente “Más info”. Los selectores de texto son poderosos para pruebas que deben emular cómo los usuarios encuentran elementos basados en su texto visible.

```js
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
```

Ejemplo que se puede encontrar en 02-selectores.spec.ts

## Interacción con elementos

## Asertivas y validación de estados
