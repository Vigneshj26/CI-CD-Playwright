import { test } from "playwright/test";
import { chromium } from "playwright";


test.skip('Windows Handler', async () => {


    const browser = await chromium.launch();
    const context1 = await browser.newContext();
    const page1 = await context1.newPage();


    await page1.goto("https://www.google.com")
    await page1.waitForTimeout(3000)
    const page2 = await context1.newPage()

    await page2.goto("https://www.leafground.com/table.xhtml")
    await page2.waitForTimeout(3000)
})

test("Multiwibdow",async({page})=>
{
await page.goto("https://www.flipkart.com/")




})