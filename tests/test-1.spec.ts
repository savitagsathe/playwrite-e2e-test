import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  // 1.launch the application

  await page.goto("https://katalon-demo-cura.herokuapp.com/profile.php#login");
  //2.click on the make appointment button
  await page.getByRole("link", { name: "Make Appointment" }).click();
  await expect(page.getByText("Please login to make")).toBeVisible();

 //3.Login
  await page.getByLabel("Username").fill("john Doe");
  await page.getByLabel("Password").fill("This isNotAPassword");
  await page.getByRole("button", { name: "Login" }).click();

  //4.Assert text
  await expect(page.locator("h2")).toContainText("Make Appointment");
});
