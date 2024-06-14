import { test, expect } from "@playwright/test";
//import dotenv from "dotenv";
//dotenv.config({ path: "/.env.e2e" });

console.log(process.env);

test("debería ir a la página roja", async ({ page }) => {
	await page.goto("http://localhost:3000/");

	await page.click("text=Rojo");
	await expect(page).toHaveURL("http://localhost:3000/red");
	await expect(page.locator("h1")).toContainText("Red Page");
	await expect(page.locator("h2")).toContainText("texto-en-rojo");
});

test("debería ir a la página azul", async ({ page }) => {
	await page.goto("http://localhost:3000/");
	await page.click("text=Azul");
	await expect(page).toHaveURL("http://localhost:3000/blue");
	await expect(page.locator("h1")).toContainText("Blue Page");
});
