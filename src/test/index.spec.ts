import { test, expect } from "@playwright/test";

test("basic test", async ({ page, baseURL }) => {
  await page.goto(baseURL as string);
  const pathHome = page.evaluate(() => window.location.href);
  console.log(pathHome);
  expect(pathHome).toContain("local");
});
