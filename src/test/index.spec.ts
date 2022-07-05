import { test, expect } from "@playwright/test";

test.describe.configure({ mode: "parallel" });

const url_with_repo =
  "http://localhost:3000/?repository=https://gist.github.com/Usielrivas/467dea6f02b843258f724f781dfc18b1";

const url_with_data =
  "http://localhost:3000/?repository=https://gist.github.com/Usielrivas/467dea6f02b843258f724f781dfc18b1&data=eyJpIjowLCJ2IjpbeyJpIjo1LCJ2IjpbXX0seyJpIjo2LCJ2IjpbXX1dfQ==";

test.describe("Testing basic functions by loading data by URL", () => {
  test("Testing the repo upload", async ({ page }) => {
    await page.goto(url_with_repo);
    const pathHome = await page.evaluate(() => window.location.href);
    expect(pathHome).toEqual(url_with_repo);
  });

  test("Testing bubble rendering via data params", async ({ page }) => {
    await page.goto(url_with_data, { waitUntil: "domcontentloaded" });
    await test.step("The first bubble to render", async () => {
      const bubble = await page
        .locator("#idhashxd0")
        .evaluate((node) => node.classList);
      expect(bubble[0]).toContain("CodeBlock");
    });
    // const pathHome = await page.evaluate(() => window.location.href);
    // expect(pathHome).toEqual(url_with_data);
  });
});
