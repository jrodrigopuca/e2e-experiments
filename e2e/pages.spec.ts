import { test, expect } from "@playwright/test";

test("debería ir a la página roja", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.click("text=Rojo");
	await expect(page).toHaveURL("http://localhost:3000/red");
	await expect(page.locator("h1")).toContainText("Red Page");
});

test("debería ir a la página azul", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.click("text=Azul");
	await expect(page).toHaveURL("http://localhost:3000/blue");
	await expect(page.locator("h1")).toContainText("Blue Page");
});
