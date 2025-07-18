
import  { Browser,test, chromium, Locator, Page } from "playwright/test";

test('locator test',async()=>{
 const browser:Browser=await chromium.launch({headless:false,channel:'chrome'})
   const page:Page = await browser.newPage();
    await page.goto("http://127.0.0.1:5501/form.html");
 
    //use of id selector
    const fname:Locator = await page.locator('#txt1')
    await fname.fill('Hari')
    const password:Locator = await page.locator('#txt2')
    await password.fill('Hari@122')
    
    
    //use of class selector
    const logo:Locator = await page.locator(".logo");
    const logoExits =await logo.isEnabled();
    console.log(logoExits);
 
    const contact:Locator = await page.locator(".txtContact");
    await contact.fill("8124285250");

     //use of css property and tag name
    const address:Locator = await page.locator("css=input#textaddress");
    await address.fill("Sipcot IT park");
 
     const pincode:Locator = await page.locator("css=input#textpincode");
    await contact.fill("600119");

    const email:Locator=page.locator('xpath=//input[@name="myemail" and @type="email"]')
    await email.fill("hari@gmail.com")
    //use of text selector
    const heading:Locator=await page.locator("text=Registration Form")  
    const headingExit=await heading.isEnabled();
    console.log(headingExit);
    
})





