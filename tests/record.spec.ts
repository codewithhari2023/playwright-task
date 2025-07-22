import { describe } from "node:test";
import {test }from "playwright/test";

describe("hematiteinfotech test",()=>{
    test("login test",async({page})=>{
        page.goto("https://quiz.hematitecorp.com/#/")
        page.pause()
    })
})