import { Browser, test, BrowserContext, chromium, Page, Locator, expect } from "playwright/test"

test("testing browser context", async () => {
    const browser: Browser = await chromium.launch({ headless: false, channel: 'chrome' })
    const browsercontext: BrowserContext = await browser.newContext()
    const page1: Page = await browsercontext.newPage()

    await page1.goto("http://quiz.hematitecorp.com/#/");
    const email: Locator = await page1.locator("#email");
    const password: Locator = await page1.locator("#password")
    const submitbtn: Locator = await page1.locator("[type=submit]")

    await email.fill("hariprasath.r@changepond.com")
    await password.fill("HariPrasath25@2002")
    await submitbtn.click();

    const title = await page1.title();
    console.log("Home page titile", title);
    await page1.screenshot({ path: "VoucherCode.png" });
    expect(title).toEqual("Quiz App");



    const browsercontext2: BrowserContext = await browser.newContext()
    const page2: Page = await browsercontext2.newPage();


    await page2.goto("http://quiz.hematitecorp.com/#/");
    const email2: Locator = await page2.locator("#email");
    const password2: Locator = await page2.locator("#password")
    const submitbtn2: Locator = await page2.locator("[type=submit]")

    await email2.fill("santhosh.v@changepond.com")
    await password2.fill("sh@452")
    await submitbtn2.click();

    const title2 = await page2.title();
    console.log("Home page titile", title);
    await page2.screenshot({ path: "VoucherCode.png" });
    expect(title).toEqual("Quiz App");
})