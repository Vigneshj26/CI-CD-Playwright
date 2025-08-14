import { test } from "playwright/test"


test('Select Dropdown', async ({ page }) => {
    await page.goto("https://www.telerik.com/contact")

    const data = page.locator("#Dropdown-1 > option")

    const count = await data.count()


    for (let i = 0; i < count; i++) {


        const value = await data.nth(i).textContent()
        // console.log(value)

        if (value?.trim() === "Renewal") {

            console.log("Found the value: " + value)
        }



    }











})