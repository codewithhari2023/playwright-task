import test, { expect } from "playwright/test";

test("custom assertion",async ({page})=>{
    await page.goto("http://127.0.0.1:5501/assertion.html")
    await page.pause();
    const textValue=await page.locator("#d1").textContent();
    const value=parseInt(textValue || '0');
    await expect(value>10).toBeTruthy();

    const textValue1:any=await page.locator("#d2").textContent(); 
    await expect(textValue1.length>5).toBeTruthy();

    const message:any=await page.locator("#d2"); 
    await assertminlength(message,5)
})
const assertminlength=async (locator:any,minlength:number)=>{
    const text=await locator.textContent()
    await expect((text || '').length).toBeGreaterThan(minlength)
}