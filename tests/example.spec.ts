import { test, expect, Locator } from '@playwright/test';
import { log } from 'console';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('check addition of 2 numbers',async({page})=>{
  await page.goto('http://127.0.0.1:5500/cal.html')
  await page.fill('#num1','5')
  await page.fill('#num2','6')
  await page.click('#btnadd')
const result =await page.textContent('#res');
await expect(result?.trim()).toBe('11');
});

test('check subtraction of 2 numbers',async({page})=>{
  await page.goto('http://127.0.0.1:5500/cal.html')
  await page.fill('#num1','7')
  await page.fill('#num2','4')
  await page.click('#btnadd1')
const result =await page.textContent('#res');
await expect(result?.trim()).toBe('3');
});


test('check multiplication of 2 numbers',async({page})=>{
  await page.goto('http://127.0.0.1:5500/cal.html')
  await page.fill('#num1','5')
  await page.fill('#num2','6')
  await page.click('#btnadd2')
const result =await page.textContent('#res');
await expect(result?.trim()).toBe('30');
});

test('check division of 2 numbers',async({page})=>{
  await page.goto('http://127.0.0.1:5500/cal.html')
  await page.fill('#num1','30')
  await page.fill('#num2','6')
  await page.click('#btnadd3')
const result =await page.textContent('#res');
await expect(result?.trim()).toBe('5');
});

test('has heading', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/html_tables.asp');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("HTML Tables");
});
test('login test',async({page})=>{
  await page.goto("http://quiz.hematitecorp.com/#/")
  const email:Locator=await page.locator("#email");
  const password:Locator=await page.locator("#password")
  const submitbtn:Locator=await page.locator("[type=submit]")

  await email.fill("hariprasath.r@changepond.com")
  await password.fill("HariPrasath25@2002")
  await submitbtn.click();

  const title=await page.title();
  console.log("Home page titile",title);
  await page.screenshot({path:"VoucherCode.png"});
  expect(title).toEqual("Quiz App");
  // browser.close()
  
})
