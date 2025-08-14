import { Page } from "playwright-core";

class LoginPage {

    lp: Page

    constructor(lp: Page) {
        this.lp = lp
    }

    async loadUrl() {


        await this.lp.goto("http://leaftaps.com/opentaps/control/main")
    }


    async userDetails() {

        await this.lp.fill("//input[@id='username']", "DemoSalesManager")
        await this.lp.fill("//input[@id='password']", "crmfsa")
    }

    async clickLogin() {

        await this.lp.click("//input[@value='Login']")
    }

}


