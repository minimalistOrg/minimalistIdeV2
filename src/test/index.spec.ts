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
    //
    await test.step("Testing input search", async ()=>{
        await inputSearchTest(page)
    })
    //
    await test.step("Buble order", async () => {
      await BubbleOrder(page);
    });
    //
    await test.step(
      "hover from calltree div to bubble & identifier",
      async () => {
        const listTreefn = page.locator(".liBubble");
        //
        await HoverTree(true, false, 0, "main", listTreefn, page);
        await HoverTree(true, true, 1, "printOne", listTreefn, page);
        await HoverTree(true, true, 2, "division", listTreefn, page);
        await HoverTree(true, true, 3, "multiplication", listTreefn, page);
        await HoverTree(true, false, 4, "logic", listTreefn, page);
        //without hover
        await HoverTree(false, false, 0, "main", listTreefn, page);
        await HoverTree(false, true, 1, "printOne", listTreefn, page);
        await HoverTree(false, true, 2, "division", listTreefn, page);
        await HoverTree(false, true, 3, "multiplication", listTreefn, page);
        await HoverTree(false, false, 4, "logic", listTreefn, page);
      }
    );
    await test.step("testing hover from fncall to bubbles", async () => {
      await HoverCallTree("multiplication", page);
      await HoverCallTree("division", page);
      await HoverCallTree("printOne", page);
      await WithoutHoverCallTree("multiplication", page);
      await WithoutHoverCallTree("division", page);
      await WithoutHoverCallTree("printOne", page);
    });
    await test.step("testing hover from bubble to fncall", async () => {
      await HoverBubbleHeader("multiplication", page);
      await HoverBubbleHeader("division", page);
      await HoverBubbleHeader("printOne", page);
      await BubbleHeader("multiplication", page);
      await BubbleHeader("division", page);
      await BubbleHeader("printOne", page);
    });
    await test.step(
      "testing hover from params to identifier (b <=> b )",
      async () => {
        await HoverParamsIdentifier("multiplication", page);
        await ParamsIdentifier("multiplication", page);
        // await HoverParamsIdentifier("division", page)
      }
    );
  });
});

//
async function HoverTree(
  hover: boolean,
  solid: boolean,
  index: number,
  fn: string,
  listTreefn: any,
  page: any
) {
  if (hover) {
    await listTreefn.nth(index).hover();
  } else {
    await page.locator(".MenuHeader__btn").hover();
  }
  const printOneBubble = page.locator(`.CodeBlock[data-title="${fn}"]`);
  const printOneBubbleHover = await printOneBubble.evaluate(
    (node: HTMLElement) => node.classList.contains("CodeBlockHover")
  );
  const printOneBubbleHeaderHover = await printOneBubble.evaluate(
    (node: HTMLElement) =>
      node.children[0].classList.contains("CodeBlock__header--hover")
  );

  if (hover) {
    if (solid) {
      const printOneBubbleFn = await page
        .locator(`.CallExpression[data-name="${fn}"]`)
        .evaluate((node: HTMLElement) =>
          node.classList.contains("CallExpressionHover")
        );
      expect(true).toEqual(printOneBubbleFn);
    }

    expect(true).toEqual(printOneBubbleHover);
    expect(true).toEqual(printOneBubbleHeaderHover);
  } else {
    if (solid) {
      const printOneBubbleFn = await page
        .locator(`.CallExpression[data-name="${fn}"]`)
        .evaluate((node: HTMLElement) =>
          node.classList.contains("CallExpressionHover")
        );
      expect(true).not.toEqual(printOneBubbleFn);
    }

    expect(true).not.toEqual(printOneBubbleHover);
    expect(true).not.toEqual(printOneBubbleHeaderHover);
  }
}
//
//
//
async function HoverParamsIdentifier(fn: string, page: any) {
  await page
    .locator(
      `.CodeBlock[data-title="${fn}"] .CodeBlock__arguments span[data-identifier="a"]`
    )
    .hover();
  const n1 = await page
    .locator('.CodeBlock[data-title="main"]')
    .evaluate((node: HTMLElement) => {
      const listN1 = node.querySelectorAll('span[data-identifier="n1"]');
      const result = Array.from(listN1).map((node) =>
        node.classList.contains("identifierHover")
      );
      return result;
    });
  expect(5).toEqual(n1.length);
  expect(false).toEqual(n1.includes(false));
  // console.log(n1)

  await page
    .locator(
      `.CodeBlock[data-title="${fn}"] .CodeBlock__arguments span[data-identifier="b"]`
    )
    .hover();
  const n2 = await page
    .locator('.CodeBlock[data-title="main"]')
    .evaluate((node: HTMLElement) => {
      const listN1 = node.querySelectorAll('span[data-identifier="n2"]');
      const result = Array.from(listN1).map((node) =>
        node.classList.contains("identifierHover")
      );
      return result;
    });
  expect(5).toEqual(n2.length);
  expect(false).toEqual(n2.includes(false));
  // console.log(n2)
}
//without hover
async function ParamsIdentifier(fn: string, page: any) {
  await page.locator(".MenuHeader__btn").hover();
  const n1 = await page
    .locator('.CodeBlock[data-title="main"]')
    .evaluate((node: HTMLElement) => {
      const listN1 = node.querySelectorAll('span[data-identifier="n1"]');
      const result = Array.from(listN1).map((node) =>
        node.classList.contains("identifierHover")
      );
      return result;
    });
  expect(5).toEqual(n1.length);
  expect(false).not.toEqual(n1.includes(false));
  // console.log(n1)

  const n2 = await page
    .locator('.CodeBlock[data-title="main"]')
    .evaluate((node: HTMLElement) => {
      const listN1 = node.querySelectorAll('span[data-identifier="n2"]');
      const result = Array.from(listN1).map((node) =>
        node.classList.contains("identifierHover")
      );
      return result;
    });
  expect(5).toEqual(n2.length);
  expect(false).not.toEqual(n2.includes(false));
  // console.log(n2)
}

//without hover
async function BubbleHeader(fn: string, page: any) {
  await page.locator(".MenuHeader__btn").hover();
  const HoverBuble = await page
    .locator(`.CodeBlock[data-title="${fn}"]`)
    .evaluate((node: HTMLElement) => node.classList.contains("CodeBlockHover"));
  const fncall = await page
    .locator(`.CallExpression[data-name="${fn}"]`)
    .evaluate((node: HTMLElement) =>
      node.classList.contains("CallExpressionHover")
    );
  expect(true).not.toEqual(HoverBuble);
  expect(true).not.toEqual(fncall);
}
//
async function HoverBubbleHeader(fn: string, page: any) {
  const Bubble = page.locator(
    `.CodeBlock[data-title="${fn}"] > .CodeBlock__header`
  );
  await Bubble.hover();
  const HoverBuble = await page
    .locator(`.CodeBlock[data-title="${fn}"]`)
    .evaluate((node: HTMLElement) => node.classList.contains("CodeBlockHover"));
  const fncall = await page
    .locator(`.CallExpression[data-name="${fn}"]`)
    .evaluate((node: HTMLElement) =>
      node.classList.contains("CallExpressionHover")
    );
  expect(true).toEqual(HoverBuble);
  expect(true).toEqual(fncall);
}
//
async function HoverCallTree(fn: string, page: any) {
  await page.locator(`.CallExpression[data-name="${fn}"]`).hover();
  const multiplicationBubbleWithOutHover = await page
    .locator(`.CodeBlock[data-title="${fn}"]`)
    .evaluate((node: HTMLElement) => node.classList.contains("CodeBlockHover"));
  const multiplicationBubbleWithOutHoverHeader = await page
    .locator(`.CodeBlock[data-title="${fn}"]`)
    .evaluate((node: HTMLElement) =>
      node.children[0].classList.contains("CodeBlock__header--hover")
    );

  expect(true).toEqual(multiplicationBubbleWithOutHover);
  expect(true).toEqual(multiplicationBubbleWithOutHoverHeader);
  // console.log("Ok")
}

async function WithoutHoverCallTree(fn: string, page: any) {
  await page.locator(".MenuHeader__btn").hover();
  const multiplicationBubbleWithOutHover = await page
    .locator(`.CodeBlock[data-title="${fn}"]`)
    .evaluate((node: HTMLElement) => node.classList.contains("CodeBlockHover"));
  const multiplicationBubbleWithOutHoverHeader = await page
    .locator(`.CodeBlock[data-title="${fn}"]`)
    .evaluate((node: HTMLElement) =>
      node.children[0].classList.contains("CodeBlock__header--hover")
    );

  expect(true).not.toEqual(multiplicationBubbleWithOutHover);
  expect(true).not.toEqual(multiplicationBubbleWithOutHoverHeader);
  // console.log("Ok")
}

async function inputSearchTest(page: any) {
  await page.type('[placeholder="Search functions by name"]', "mai", {
    delay: 1000,
  });
  await page.press('[placeholder="Search functions by name"]', "Enter");
  await page.type('[placeholder="Search functions by name"]', "logi", {
    delay: 1000,
  });
  await page.press('[placeholder="Search functions by name"]', "Enter");
}

async function BubbleOrder(page: any) {
  // await page.locator(".CodeBlock").nth(0).waitFor()
  const Bubbles = await page.locator(".CodeBlock").count();
  console.log(Bubbles, "Order Bubbles Open");
  expect(2).toEqual(Bubbles);
  await page.locator('[data-identifier="printOne"]').click();
  await page.locator('[data-identifier="division"]').click();
  await page.locator('[data-identifier="multiplication"]').click();
  const firstRow = await page
    .locator(".CodeBlock")
    .evaluateAll((node: HTMLElement[]) =>
      node.map(
        (node: HTMLElement) => (node as HTMLElement & FnInfoType).fninfo.order
      )
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
    .evaluateAll((node: HTMLElement[]) =>
      node.map(
        (node: HTMLElement) => (node as HTMLElement & FnInfoType).fninfo.order
      )
    );
  const multiplicationRe = reTest[3];
  const divisionRe = reTest[2];
  const printOneRe = reTest[1];
  // console.log(firstRow)
  expect(3).toEqual(multiplicationRe);
  expect(4).toEqual(divisionRe);
  expect(10).toEqual(printOneRe);
}
