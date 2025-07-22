import { expect, test } from "playwright/test";
import { json } from "stream/consumers";

test("mock api", async ({ page }) => {
    await page.route("api/users", (route) => {
        route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify([{ id: 1, name: "hari" }, { id: 2, name: "muthupandi" }])
        })
    })
    await page.goto('http://127.0.0.1:5501/mockapi.html')
    const userList=await page.locator('.user').allTextContents();
    await expect(userList).toContain("Muthu")
})
test("get request on the role ",async({page})=>{
    await page.route("api/user?role=admin",(route)=>{
        route.fulfill({
            status:500,
            contentType:'application/json',
            body:"Internal server Error"
        })
    })
    await page.goto('http://127.0.0.1:5501/mockapi.html')
    const errorList=await page.locator('.error').allTextContents();
    await expect(errorList).toContain("Internal server Error")
})