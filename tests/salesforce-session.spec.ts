import test from "playwright/test";

test.use({ storageState: 'utils/login-session.json' })
test('Run the storage state', async ({ page }) => {

    await page.goto("https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")
    await page.locator("//a[normalize-space()='Salesforce Go']").click()
    await page.title();
    console.log("Works fine)")




})