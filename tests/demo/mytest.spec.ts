import{test,expect } from '@playwright/test';                        
test("should load homepage with title",async({page})=>{
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page).toHaveTitle("CURA Healthcare Service");
    await e      xpect(page.locator("h1")).toHaveText("CURA Healthcare Service");
});

test("should do something",{tag:"@smoke"},async({ page },testInfo)=>{
//steps
await page.locator("h1").click();
});

test.only("should domo locators",async({ page })=>{
    //test.only() is for running a single test during development.
// The page.getBy*() and page.locator() methods return the locator object.
// These methods should not be awaited.Use await only for actions (click(), fill(), check(), etc.).
// The type of locator returned is an object.
// Locators are lazy and will not perform any actions until an action is invoked on them.
// 1. Launch URL
await page.goto("https://katalon-demo-cura.herokuapp.com/");

// 2. Click on the Make Appointment
//let makeApptBtn = page.getByRole("link", { name: "Make Appointment" });
//console.log(`>> The type of locator: ${typeof makeApptBtn}, The value of the locator is: ${JSON.stringify(makeApptBtn)}`);

 let makeApptBtn = page.getByRole("link", { name: "invalid Appointment" });
 await makeApptBtn.click();
//await expect(page.getByText("Please login to make")).toBeVisible();

await page.getByRole('heading', { name: 'We Care About Your Health' }).click();
});

