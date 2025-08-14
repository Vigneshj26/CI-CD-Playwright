import test from "playwright/test";

test('Handling dynamic web tables', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")

    const Table = page.locator("//table[@id='taskTable']")
    const Header = Table.locator("thead")
    const rows = Table.locator("tbody tr")
    const TotalRow = await rows.count()
    const col = rows.first().locator("td")
    console.log(await col.count())




})