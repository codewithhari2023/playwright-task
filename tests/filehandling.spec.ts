import { log } from "console";
import test from "playwright/test";

test("file handling test",async({page})=>{
    await page.goto("http://127.0.0.1:5501/assertion.html")
    await page.pause();
    const filepath:string="tests/jsNotes.txt"
    await page.setInputFiles("input[type=file]",filepath)
      await page.locator('button[type="submit"]').click()

      const [download]=await Promise.all([
        page.waitForEvent('download'),
        page.click('#downloadbtn')
      ])
      const downloadpath:string=await download.path()
      console.log("downloading file",downloadpath);
      
})