import { test, expect } from "@playwright/test";

test.describe("Make appointment", () => {
  test.beforeEach(async ({ page }) => {
  // Navigate to the application
  await page.goto("https://katalon-demo-cura.herokuapp.com/");

  // Verify home page
  await expect(page).toHaveTitle("CURA Healthcare Service");
  await expect(page.locator("h1")).toHaveText("CURA Healthcare Service");

  // Click on the Make Appointment button
  await page.getByRole("link", { name: "Make Appointment" }).click();

  // Verify login page
  await expect(
    page.getByText("Please login to make appointment.")).toBeVisible();

  // Login with valid credentials
  await page.getByLabel("Username").fill("John Doe");
  await page.getByLabel("Password").fill("ThisIsNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();

  // Verify Make Appointment page
  await expect(page.locator("h2")).toHaveText("Make Appointment");
});

  test("Should make an appointment with non-default values", async ({ page }) => {

  // Dropdown
  await page.getByLabel("Facility").selectOption("Hongkong CURA Healthcare Center");

  // Checkbox
  await page.getByText("Apply for hospital readmission").click();

  // Radio button
  await page.getByText("Medicaid").click();

  // Date input box
  await page.getByRole("textbox", { name: "Visit Date (Required)" }).click();
  await page.getByRole("textbox", { name: "Visit Date (Required)" }).fill("05/10/2027");
  await page.getByRole("textbox", { name: "Visit Date (Required)" }).press("Enter");

  // Multi-line comments input box
  await page.getByRole("textbox", { name: "Comment" }).click();
  await page.getByRole("textbox", { name: "Comment" }).fill("This is a multi-line comments\ncaptured by Playwright.");

  //Button
  await page.getByRole("button", { name: "Book Appointment" }).click();

  //Assertion
  await expect(page.locator("h2")).toContainText("Appointment Confirmation");
  await expect(page.getByRole("link", { name: "Go to Homepage" })).toBeVisible();

});
  
// more tests go here.........



});
