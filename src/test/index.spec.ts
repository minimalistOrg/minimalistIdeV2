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
    await test.step("testing obj primary", async () => {
      await page.locator(".CodeBlock").nth(0).waitFor();
      const Bubbles = await page
        .locator(".CodeBlock")
        .evaluateAll((list) => list);
      // console.log(firstBubble)
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

    await test.step("Close bubble from top to bottom", async () => {
      const Bubblesclose = page.locator(".CodeBlock__menu");
      await Bubblesclose.nth(1).click();
      const count = await Bubblesclose.count();
      // console.log(count);

      const Bubbles = await page
        .locator(".CodeBlock")
        .evaluateAll((list) => list);

      const BubbleMain = await page.evaluate(() =>
        window.UrlData()[0].Bubble()
      );
      const BubbleDivision = await page.evaluate(() =>
        window.UrlData()[0].value[0].Bubble()
      );
      const MainIsCorrect = BubbleMain === Bubbles[0];
      const DivisionIsCorrect = BubbleDivision === Bubbles[1];
      expect(true).toEqual(MainIsCorrect);
      expect(true).toEqual(DivisionIsCorrect);
    });
  });
});

test.describe("order bubble", () => {
  test("from input search function", async ({ page }) => {
    await page.goto(url_with_repo);
    await page.type('[placeholder="Search functions by name"]', "mai", {
      delay: 1000,
    });
    await page.press('[placeholder="Search functions by name"]', "Enter");
    await page.type('[placeholder="Search functions by name"]', "logi", {
      delay: 1000,
    });
    await page.press('[placeholder="Search functions by name"]', "Enter");
    // await page.locator(".CodeBlock").nth(0).waitFor()
    const Bubbles = await page.locator(".CodeBlock").count();
    console.log(Bubbles, "Order Bubbles Open");
    expect(2).toEqual(Bubbles);
    await page.locator('[data-identifier="printOne"]').click();
    await page.locator('[data-identifier="division"]').click();
    await page.locator('[data-identifier="multiplication"]').click();
    const firstRow = await page
      .locator(".CodeBlock")
      .evaluateAll((node) =>
        node.map((node) => (node as HTMLElement & FnInfoType).fninfo.order)
      );
    const multiplication = firstRow[3];
    const division = firstRow[2];
    const printOne = firstRow[1];
    // console.log(firstRow)
    expect(3).toEqual(multiplication);
    expect(4).toEqual(division);
    expect(10).toEqual(printOne);
    const closeBuble = page.locator(".CodeBlock__menu");
    await closeBuble.nth(3).click();
    await closeBuble.nth(2).click();
    await closeBuble.nth(1).click();
    await page.locator('[data-identifier="printOne"]').click();
    await page.locator('[data-identifier="division"]').click();
    await page.locator('[data-identifier="multiplication"]').click();

    const reTest = await page
      .locator(".CodeBlock")
      .evaluateAll((node) =>
        node.map((node) => (node as HTMLElement & FnInfoType).fninfo.order)
      );
    const multiplicationRe = reTest[3];
    const divisionRe = reTest[2];
    const printOneRe = reTest[1];
    // console.log(firstRow)
    expect(3).toEqual(multiplicationRe);
    expect(4).toEqual(divisionRe);
    expect(10).toEqual(printOneRe);
    await test.step(
      "hover from calltree div to bubble & identifier",
      async () => {
        const listTreefn = page.locator(".liBubble");
        await listTreefn.nth(0).hover();
        const mainBubble = page.locator('.CodeBlock[data-title="main"]');
        const mainBubbleHover = await mainBubble.evaluate((node) =>
          node.classList.contains("CodeBlockHover")
        );
        const mainBubbleHeaderHover = await mainBubble.evaluate((node) =>
          node.children[0].classList.contains("CodeBlock__header--hover")
        );
        expect(true).toEqual(mainBubbleHover);
        expect(true).toEqual(mainBubbleHeaderHover);

        await listTreefn.nth(1).hover();
        const printOneBubble = page.locator(
          '.CodeBlock[data-title="printOne"]'
        );
        const printOneBubbleHover = await printOneBubble.evaluate((node) =>
          node.classList.contains("CodeBlockHover")
        );
        const printOneBubbleHeaderHover = await printOneBubble.evaluate(
          (node) =>
            node.children[0].classList.contains("CodeBlock__header--hover")
        );

        const printOneBubbleFn = await page
          .locator('.CallExpression[data-name="printOne"]')
          .evaluate((node) => node.classList.contains("CallExpressionHover"));

        expect(true).toEqual(printOneBubbleHover);
        expect(true).toEqual(printOneBubbleFn);
        expect(true).toEqual(printOneBubbleHeaderHover);

        await listTreefn.nth(2).hover();
        const divisionBubble = page.locator(
          '.CodeBlock[data-title="division"]'
        );
        const divisionBubbleHover = await divisionBubble.evaluate((node) =>
          node.classList.contains("CodeBlockHover")
        );
        const divisionBubbleHeaderHover = await divisionBubble.evaluate(
          (node) =>
            node.children[0].classList.contains("CodeBlock__header--hover")
        );

        const divisionBubbleFn = await page
          .locator('.CallExpression[data-name="division"]')
          .evaluate((node) => node.classList.contains("CallExpressionHover"));

        expect(true).toEqual(divisionBubbleHover);
        expect(true).toEqual(divisionBubbleFn);
        expect(true).toEqual(divisionBubbleHeaderHover);

        await listTreefn.nth(3).hover();
        const multiplicationBubble = page.locator(
          '.CodeBlock[data-title="multiplication"]'
        );
        const multiplicationBubbleHover = await multiplicationBubble.evaluate(
          (node) => node.classList.contains("CodeBlockHover")
        );
        const multiplicationBubbleHeaderHover =
          await multiplicationBubble.evaluate((node) =>
            node.children[0].classList.contains("CodeBlock__header--hover")
          );

        const multiplicationBubbleFn = await page
          .locator('.CallExpression[data-name="multiplication"]')
          .evaluate((node) => node.classList.contains("CallExpressionHover"));

        expect(true).toEqual(multiplicationBubbleHover);
        expect(true).toEqual(multiplicationBubbleFn);
        expect(true).toEqual(multiplicationBubbleHeaderHover);

        await listTreefn.nth(4).hover();
        const logicBubble = page.locator('.CodeBlock[data-title="logic"]');
        const logicBubbleHover = await logicBubble.evaluate((node) =>
          node.classList.contains("CodeBlockHover")
        );
        const logicBubbleHeaderHover = await logicBubble.evaluate((node) =>
          node.children[0].classList.contains("CodeBlock__header--hover")
        );
        expect(true).toEqual(logicBubbleHover);
        expect(true).toEqual(logicBubbleHeaderHover);

        //Hover not
        const mainBubbleWithOutHover = await page
          .locator('.CodeBlock[data-title="main"]')
          .evaluate((node) => node.classList.contains("CodeBlockHover"));
        const mainBubbleWithOutHoverHeader = await page
          .locator('.CodeBlock[data-title="main"]')
          .evaluate((node) =>
            node.children[0].classList.contains("CodeBlock__header--hover")
          );
        expect(true).not.toEqual(mainBubbleWithOutHover);
        expect(true).not.toEqual(mainBubbleWithOutHoverHeader);

        const multiplicationBubbleWithOutHover = await page
          .locator('.CodeBlock[data-title="multiplication"]')
          .evaluate((node) => node.classList.contains("CodeBlockHover"));
        const multiplicationBubbleWithOutHoverHeader = await page
          .locator('.CodeBlock[data-title="multiplication"]')
          .evaluate((node) =>
            node.children[0].classList.contains("CodeBlock__header--hover")
          );
        const multiplicationFnCall = await page
          .locator('.CallExpression[data-name="multiplication"]')
          .evaluate((node) => node.classList.contains("CallExpressionHover"));
        expect(true).not.toEqual(multiplicationBubbleWithOutHover);
        expect(true).not.toEqual(multiplicationBubbleWithOutHoverHeader);
        expect(true).not.toEqual(multiplicationFnCall);

        const divisionBubbleWithOutHover = await page
          .locator('.CodeBlock[data-title="division"]')
          .evaluate((node) => node.classList.contains("CodeBlockHover"));
        const divisionBubbleWithOutHoverHeader = await page
          .locator('.CodeBlock[data-title="division"]')
          .evaluate((node) =>
            node.children[0].classList.contains("CodeBlock__header--hover")
          );
        const divisionFnCall = await page
          .locator('.CallExpression[data-name="division"]')
          .evaluate((node) => node.classList.contains("CallExpressionHover"));
        expect(true).not.toEqual(divisionBubbleWithOutHover);
        expect(true).not.toEqual(divisionBubbleWithOutHoverHeader);
        expect(true).not.toEqual(divisionFnCall);

        const printOneBubbleWithOutHover = await page
          .locator('.CodeBlock[data-title="printOne"]')
          .evaluate((node) => node.classList.contains("CodeBlockHover"));
        const printOneBubbleWithOutHoverHeader = await page
          .locator('.CodeBlock[data-title="printOne"]')
          .evaluate((node) =>
            node.children[0].classList.contains("CodeBlock__header--hover")
          );
        const printOneFnCall = await page
          .locator('.CallExpression[data-name="printOne"]')
          .evaluate((node) => node.classList.contains("CallExpressionHover"));
        expect(true).not.toEqual(printOneBubbleWithOutHover);
        expect(true).not.toEqual(printOneBubbleWithOutHoverHeader);
        expect(true).not.toEqual(printOneFnCall);
      }
    );
  });
});

//
