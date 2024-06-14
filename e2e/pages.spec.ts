import { test, expect } from "@playwright/test";
const PORT = process.env.PORT || "3000";
const PATH = process.env.WEB_PATH || "/";
const URL = `http://localhost:${PORT}${PATH}`;

test("debería ir a la página roja", async ({ page }) => {
	await page.goto(URL);

	await page.click("button#red-btn");
	await expect(page).toHaveURL(`${URL}/red`);
	await expect(page.locator("h1")).toContainText("Red Page");
	await expect(page.locator("h2")).toContainText("texto-en-rojo");
});

test("debería ir a la página azul", async ({ page }) => {
	await page.goto(URL);
	await page.click("button#blue-btn");
	await expect(page).toHaveURL(`${URL}/blue`);
	await expect(page.locator("h1")).toContainText("Blue Page");
});
