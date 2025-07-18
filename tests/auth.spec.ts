import {Browser, BrowserContext, chromium, Page, test} from "playwright/test";

test("auth test",async ()=>{
   const browser:Browser= await chromium.launch({headless:false,channel: "chrome"})
   const broswercontext:BrowserContext=await browser.newContext()
   const page:Page=await broswercontext.newPage();


   const userId:string="admin@gmail.com"
   const userPass:string="admin@123"
   const authHeader:string="Basic" +btoa(userId+":"+userPass)
   page.setExtraHTTPHeaders({Authorization:authHeader})
   await page.goto("http://quiz.hematitecorp.com/")
//    broswercontext.close()
//    browser.close()

// await new Promise(()=>{})
})