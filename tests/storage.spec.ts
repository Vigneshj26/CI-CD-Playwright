import path from "path";
import test from "playwright/test";

test('Storing loginsession', async ({ page }) => {

        await page.goto("https://qa.creatrixcampus.net/auth/login")
        await page.getByPlaceholder("Username").fill(value.UserName)
        await page.getByPlaceholder("Password").fill(value.Password)
        await page.locator("#kt_login_signin_submit").click()

    await page.context().storageState({ path: 'utils/login-session.json' })

})