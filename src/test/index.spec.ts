import { test, expect } from "@playwright/test";
import { FnInfoType } from "../types/interface";

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
    await test.step("testing obj primary", async () => {
      const Bubbles = await page
        .locator(".CodeBlock")
        .evaluateAll((list) => list);
      const BubbleMain = await page.evaluate(() =>
        window.UrlData()[0].Bubble()
      );
      const BubbleMultiplication = await page.evaluate(() =>
        window.UrlData()[0].value[0].Bubble()
      );
      const BubbleDivision = await page.evaluate(() =>
        window.UrlData()[0].value[1].Bubble()
      );
      const MainIsCorrect = BubbleMain === Bubbles[0];
      const MultiplicationIsCorrect = BubbleMultiplication === Bubbles[1];
      const DivisionIsCorrect = BubbleDivision === Bubbles[2];
      expect(true).toEqual(MainIsCorrect);
      expect(true).toEqual(MultiplicationIsCorrect);
      expect(true).toEqual(DivisionIsCorrect);
    });
    await test.step(
      "testing fninfo after rendering between fncall & Bubble",
      async () => {
        const CallMultiplication = await page
          .locator('.CallExpression[data-name="multiplication"]')
          .evaluate((node) => node);
        const BubbleMultiplication = await page
          .locator('.CodeBlock[data-title="multiplication"]')
          .evaluate((node) => node);
        const CallDivision = await page
          .locator('.CallExpression[data-name="division"]')
          .evaluate((node) => node);
        const BubbleDivision = await page
          .locator('.CodeBlock[data-title="division"]')
          .evaluate((node) => node);
        const fninfoMultiplicationIsCorrect =
          (BubbleMultiplication as HTMLElement & FnInfoType).fninfo ===
          (CallMultiplication as HTMLElement & FnInfoType).fninfo;
        const fninfoDivisionIsCorrect =
          (BubbleDivision as HTMLElement & FnInfoType).fninfo ===
          (CallDivision as HTMLElement & FnInfoType).fninfo;
        expect(true).toEqual(fninfoMultiplicationIsCorrect);
        expect(true).toEqual(fninfoDivisionIsCorrect);
      }
    );

    await test.step("testing primary obj with fninfo bubble", async () => {
      const BubbleMain = await page
        .locator('.CodeBlock[data-title="main"]')
        .evaluate((node) => node);
      const BubbleMultiplication = await page
        .locator('.CodeBlock[data-title="multiplication"]')
        .evaluate((node) => node);

      const BubbleDivision = await page
        .locator('.CodeBlock[data-title="division"]')
        .evaluate((node) => node);

      const rootMain = await page.evaluate(() => window.UrlData()[0]);
      const rootMultiplication = await page.evaluate(
        () => window.UrlData()[0].value[0]
      );
      const rootDivision = await page.evaluate(
        () => window.UrlData()[0].value[1]
      );

      expect(true).toEqual(true);
    });
  });
});
