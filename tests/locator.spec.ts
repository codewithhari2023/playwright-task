import test from "node:test";
import { Browser, chromium, Locator, Page } from "playwright/test";

test('locator test',async()=>{
 const browser:Browser=await chromium.launch({headless:false,channel:'chrome'})
   const page:Page = await browser.newPage();
    await page.goto("http://127.0.0.1:5501/form.html");
 
    //use of id selector
    const fname:Locator = await page.locator('#txt1')
    await fname.fill('Hari')
})