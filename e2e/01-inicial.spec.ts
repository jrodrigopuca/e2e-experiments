import { test, expect } from "@playwright/test";
test.skip("test de prueba", async ({ page }) => {
	await page.goto("https://playwright.dev/");
	await page.screenshot({ path: "screenshots/playwright.png" });

	const title = await page.locator("h1");
	await expect(title).toContainText("Playwright");
});
