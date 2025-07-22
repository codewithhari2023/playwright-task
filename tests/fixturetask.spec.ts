import { expect } from 'playwright/test'
import {test} from './lognfixture'

test("display product after login",async({loggedInpage})=>{
  await expect(loggedInpage.locator(('.product_label')).toHaveText("products"))
})