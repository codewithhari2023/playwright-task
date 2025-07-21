import {test,expect} from "playwright/test";

test('',async({page})=>{
 await page.goto('http://hematitecorp.com')
 await page.pause();
 await expect.soft(page.locator("text=OUR COURSES")).toHaveCount(1);      
 if (await page.$("texxt=OUR COURSES")){
    await page.locator('text=OUR COURSES').click();

 } await expect(page.locator("text=OUR COURSE")).toBeVisible();
   await expect.soft(page.locator("text=OUR COURSE")).not.toBeHidden()

 
  await expect(page.locator("text=OUR COURSE")).toHaveText('OUR COURSES');
   await expect.soft(page.locator("text=OUR COURSE")).not.toHaveText('OUR COURSES')
})