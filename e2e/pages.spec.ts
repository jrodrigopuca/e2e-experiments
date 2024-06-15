import { test, expect } from "@playwright/test";
import { URL } from "./utils";

test("debería ir a la página principal", async ({ page }) => {
	await page.goto(URL);
	await page.screenshot({ path: "screenshots/home.png" });
	await expect(page).toHaveURL(URL);
});

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
