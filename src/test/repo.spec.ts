import { test, expect } from "@playwright/test";

const url_with_repo = "http://localhost:5000/?repository=https://github.com/Usielrivas/CodeTest/tree/main";

test.describe.configure({ mode: "parallel" });
test.describe("General test for code load repo", () => {
  test("test load repo", async ({ page }) => {
    await page.goto(url_with_repo);
    //
    await test.step("Testing input search", async () => {
      await inputSearchTest(page);
    });
    //
    await test.step("Buble order", async () => {
      //Open printOne
      await OpenBubble(8, page);
      //Open division
      await OpenBubble(2, page);
      //Open multiplication
      await OpenBubble(1, page);
      //Test Order multiplication
      await OrderBubble(3, "3", page);
      //Test Order division
      await OrderBubble(2, "4", page);
      //Test Order printOne
      await OrderBubble(1, "10", page);
      //close multiplication
      await CloseBubble(3, page)
      //close division
      await CloseBubble(2, page)
      //close printOne
      await CloseBubble(1, page)
      //Open printOne
      await OpenBubble(8, page);
      //Open division
      await OpenBubble(2, page);
      //Open multiplication
      await OpenBubble(1, page);
      //Test Order multiplication
      await OrderBubble(3, "3", page);
      //Test Order division
      await OrderBubble(2, "4", page);
      //Test Order printOne
      await OrderBubble(1, "10", page);
    });
  });
});

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

async function OpenBubble(index: number, page: any) {
  const selector = '[data-test-id="fncall"]';
  await page.locator(`${selector} > span[data-identifier]`).nth(index).click();
}
async function CloseBubble(index: number, page: any) {
  const selector = '[data-test-id="closeBubble"]';
  await page.locator(selector).nth(index).click()
}

async function OrderBubble(index: number, order: string, page: any) {
  const selector = '[data-test-id="Bubble"]';
  const Bubble = page.locator(selector);
  const getOrder = await Bubble.nth(index).evaluate(
    (node: HTMLElement) => node.parentElement?.parentElement?.style.order
  );
  expect(order).toEqual(getOrder);
}
