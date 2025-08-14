import test from "playwright/test";
import dotenv from 'dotenv'
import { env } from "process";



dotenv.config({ path: `utils/Prod.env` })
test('Testing the Env file', async ({ page }) => {

    let user = process.env.LT_UserName as string
    let pwd = process.env.LT_Password as string

    //console.log(process.env.LT_UserName)

    await page.goto("https://qa.creatrixcampus.net/auth/login")
    await page.getByPlaceholder("Username").fill(user)
    await page.getByPlaceholder("Password").fill(pwd)
    await page.locator("#kt_login_signin_submit").click()


})