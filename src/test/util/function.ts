import { expect } from "@playwright/test";

export async function inputSearchTest(page: any) {
  await page.type('[placeholder="Search functions by name"]', "mai", {
    delay: 1000,
  });
  await page.press('[placeholder="Search functions by name"]', "Enter");
  await page.type('[placeholder="Search functions by name"]', "logi", {
    delay: 1000,
  });
  await page.press('[placeholder="Search functions by name"]', "Enter");
}

export async function OpenBubble(index: number, page: any) {
  const selector = '[data-test-id="fncall"]';
  await page.locator(`${selector} > span[data-identifier]`).nth(index).click();
}
export async function CloseBubble(index: number, page: any) {
  const selector = '[data-test-id="closeBubble"]';
  await page.locator(selector).nth(index).click();
}

export async function OrderBubble(index: number, order: string, page: any) {
  const selector = '[data-test-id="Bubble"]';
  const Bubble = page.locator(selector);
  const getOrder = await Bubble.nth(index).evaluate(
    (node: HTMLElement) => node.parentElement?.parentElement?.style.order
  );
  expect(order).toEqual(getOrder);
}

export async function HoverTree(
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

export async function HoverParamsIdentifier(
  fn: string,
  param: { n1: string; n2: string; i1: string; i2: string; parent: string },
  page: any
) {
  let params = param;

  await page
    .locator(
      `.CodeBlock[data-title="${fn}"] .CodeBlock__arguments span[data-identifier="${params.n1}"]`
    )
    .hover();
  const n1 = await page
    .locator(`.CodeBlock[data-title="${params.parent}"]`)
    .evaluate((node: HTMLElement,params:any) => {
      const listN1 = node.querySelectorAll(
        `span[data-identifier="${params.i1}"]`
      );
      const result = Array.from(listN1).map((node) =>
        node.classList.contains("identifierHover")
      );
      return result;
    },params);
  expect(5).toEqual(n1.length);
  expect(false).toEqual(n1.includes(false));
  // console.log(n1)

  await page
    .locator(
      `.CodeBlock[data-title="${fn}"] .CodeBlock__arguments span[data-identifier="${params.n2}"]`
    )
    .hover();
  const n2 = await page
    .locator(`.CodeBlock[data-title="${params.parent}"]`)
    .evaluate((node: HTMLElement,params:any) => {
      const listN1 = node.querySelectorAll(`span[data-identifier="${params.i2}"]`);
      const result = Array.from(listN1).map((node) =>
        node.classList.contains("identifierHover")
      );
      return result;
    },params);
  expect(5).toEqual(n2.length);
  expect(false).toEqual(n2.includes(false));
  // console.log(n2)
}
//without hover
export async function ParamsIdentifier(fn: string,Param:{parent:string,i1:string,i2:string,expect:number}, page: any) {
  await page.locator(".MenuHeader__btn").hover();
  const n1 = await page
    .locator(`.CodeBlock[data-title="${Param.parent}"]`)
    .evaluate((node: HTMLElement,Param:any) => {
      const listN1 = node.querySelectorAll(`span[data-identifier="${Param.i1}"]`);
      const result = Array.from(listN1).map((node) =>
        node.classList.contains("identifierHover")
      );
      return result;
    },Param);
  expect(Param.expect).toEqual(n1.length);
  expect(false).not.toEqual(n1.includes(false));
  // console.log(n1)

  const n2 = await page
    .locator(`.CodeBlock[data-title="${Param.parent}"]`)
    .evaluate((node: HTMLElement,Param:any) => {
      const listN1 = node.querySelectorAll(`span[data-identifier="${Param.i2}"]`);
      const result = Array.from(listN1).map((node) =>
        node.classList.contains("identifierHover")
      );
      return result;
    },Param);
  expect(Param.expect).toEqual(n2.length);
  expect(false).not.toEqual(n2.includes(false));
  // console.log(n2)
}

//without hover
export async function BubbleHeader(fn: string, page: any) {
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
export async function HoverBubbleHeader(fn: string, page: any) {
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
export async function HoverCallTree(fn: string, page: any) {
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

export async function WithoutHoverCallTree(fn: string, page: any) {
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
