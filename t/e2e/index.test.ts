import { test } from "@playwright/test"

test("page has correct grammar", async ({ page }) => {
	await page.goto("/")

	const allTexts = await page.locator(`css=p`).allInnerTexts()

	console.log(allTexts)
});
