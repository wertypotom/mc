import { test, expect } from "@playwright/test";

test("Course link functionality", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("Learning Next.js").fill("Learn JS");
  await page
    .getByPlaceholder("Some information about your")
    .fill("Some description");
  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByRole("heading", { name: "Learn JS" })).toBeVisible();
  await expect(page.getByRole("paragraph")).toBeVisible();

  await page.getByRole("button", { name: "Remove" }).click();

  await expect(
    page.getByRole("heading", { name: "Learn JS" }),
  ).not.toBeVisible();
  await expect(page.getByRole("paragraph")).not.toBeVisible();
});
