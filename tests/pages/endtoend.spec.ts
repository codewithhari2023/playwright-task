
import {test} from '@playwright/test'
import { loginPage } from './loginpage'
import { users } from './crendentials';


for(let user of users){
test(`${user.testcase}`,async({page})=>{
  const loginpageObj=new loginPage(page);
  await loginpageObj.goto()
  await loginpageObj.login(user.username,user.password);
})
}

