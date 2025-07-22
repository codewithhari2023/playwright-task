import { test as base } from '@playwright/test'



type Myfixture = {
    helloword: string,
    greatDay:string,
    login:string
}
export const test = base.extend<Myfixture>({
    helloword: async ({ }, use: any) => {

        await use();
        console.log("where is my tea");
    },
    greatDay: async ({ }, use: any) => {

      
        const  myday="have a great day"
          await use(myday);
    },
     login: async ({browser }, use: any) => {
  const context=await browser.newContext();
  const page= await context.newPage();
  await page.goto('http://quiz.hematitecorp.com/#/')
  await page.fill("#email","hariprasath.r@changepond.com")
  await page.fill("#password","Hari@2002")
  await page.click('button[type=submit]')
  console.log("login sucessfull");
  await use("login sucess")
  await context.close()
      
        
    },
   
})