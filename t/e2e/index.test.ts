import { check } from "gramma"
import { test, expect } from "@playwright/test"

test("page has correct grammar", async ({ page }) => {
	await page.goto("/")

	const allTexts = await page.locator(`css=p`).allInnerTexts()

	const pendingResults: Promise<any>[] = allTexts.map(async text => {
		const result = await check(text, {
			"api_url": "http://0.0.0.0:8081/v2/check",

			// Put the words in this array that are not in the English dictionary like names.
			"dictionary": []
		})

		return result.matches
	})

	const expectedMatches = allTexts.map(() => [])
	const matches = await Promise.all(pendingResults)
	await expect(matches).toEqual(expectedMatches)
});
