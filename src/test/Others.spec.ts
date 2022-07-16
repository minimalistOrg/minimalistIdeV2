import { test, expect } from "@playwright/test";
import {
  OpenBubble,
  CloseBubble,
  OrderBubble,
  HoverTree,
  inputSearchTest,
  HoverCallTree,
  WithoutHoverCallTree,
  HoverBubbleHeader,
  BubbleHeader,
  HoverParamsIdentifier,
  ParamsIdentifier,
} from "./util/function";

const url_with_repo =
  "http://localhost:5000/?repository=https://github.com/Usielrivas/CodeTest/tree/dbe5c82f601b73fe1dad662ef27bcb54c4d46100&data=eyJpIjowLCJ2IjpbeyJpIjo1LCJ2IjpbXX1dfQ==";

test.describe.configure({ mode: "parallel" });

test.describe("check to open bubbles when they are already open", () => {
  test("from repo", async ({ page }) => {
    await page.goto(url_with_repo);
    await page.locator('[data-test-id="Bubble"]').nth(0).focus()
    const bubbles = await page.locator('[data-test-id="Bubble"]').count();
    expect(2).toEqual(bubbles);
    await page.locator('[data-test-id="fncall"]').nth(1).hover()
    await OpenBubble(1, page);
    const bubbles2 = await page.locator('[data-test-id="Bubble"]').count();
    expect(2).toEqual(bubbles2);
  });
});
