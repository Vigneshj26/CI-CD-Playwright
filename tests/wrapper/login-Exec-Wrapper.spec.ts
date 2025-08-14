import { test } from '@playwright/test';
import { testLogin } from './login-wrapper';

test("Test Wrapper Class", async ({ page }) => {


    const wrap = new testLogin(page)

    await wrap.gourl("http://leaftaps.com/opentaps/control/login")
    await wrap.login("demo", "crmsfa")



});