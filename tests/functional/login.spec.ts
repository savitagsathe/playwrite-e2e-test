import{test,expect } from '@playwright/test';

test.describe("Login functionality",()=>{
    test.beforeEach("Go to the login page",async({page}) =>{
 test("should login successfully",async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await expect(page.locator("h1")).toHaveText("CURA Healthcare Service");


//click on the make apppointment button
await page.getByRole('link', { name: 'Make Appointment' }).click();
await expect(page.getByText("please login to make an appointment")).toBeVisible();

    })

   
//successful login
await page.getByLabel('Username').fill('John Doe');
await page.getByLabel('Password').fill('ThisIsNotAPassword');
await page.getByRole('button', { name: 'Login' }).click();

//assert a text
await expect(page.locator("h2")).toContainText("Make Appointment");

});

test("should prevent login with invalid credentials",async({page})=>{
    

//unsuccessful login
await page.getByLabel('Username').fill('John Doe');
await page.getByLabel('Password').fill('ThisIsNotAPassword');
await page.getByRole('button', { name: 'Login' }).click();

//assert a error message

await expect(page.locator('#login')).toContainText('Login failed! Please ensure the username and password are valid.');
});
});