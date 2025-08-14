import { Page } from "playwright/test"

export abstract class wrapper {

    page: Page


    constructor(page: Page) {

        this.page = page

    }


    async clearValue(data: string, locator: string) {
        const clearText = this.page.locator(locator)
        await clearText.clear()
        await clearText.fill(data)
    }



}