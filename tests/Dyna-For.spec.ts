import test from "playwright/test";


test('Finding dynamic value in webtable', async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")

    const Table = page.locator("//table[@id='taskTable']")
    const row = Table.locator("tbody tr").nth(5)

    const col = row.locator("td").nth(5)

    const text = await col.textContent()

    console.log(text)







})