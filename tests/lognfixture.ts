import { test as base, Browser, chromium } from "playwright/test";

type Myfixture = {
    loggedInpage: any
}

export const test=base.extend<Myfixture>({
    loggedInpage: async ({ }, use: any) => {
        const browser: Browser = await chromium.launch()
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await use(page)
        await context.close()
    }
})