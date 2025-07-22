import {test }from "@playwright/test";
import { describe } from "node:test";

describe("test cases for sauce app",()=>{
test("login test",async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.pause()
    await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  
  

})

test("home test",async({page})=>{
  await page.locator('[data-test="item-1-img-link"]').click();
  await page.locator('[data-test="add-to-cart"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('aditya');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('kumar');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('1234');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
})
test("logout test",async({page})=>{
    await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
})
})


