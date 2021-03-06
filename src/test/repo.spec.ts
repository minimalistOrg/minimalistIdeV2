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
  "http://localhost:5000/?repository=https://github.com/Usielrivas/CodeTest/tree/dbe5c82f601b73fe1dad662ef27bcb54c4d46100";

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
      await CloseBubble(3, page);
      //close division
      await CloseBubble(2, page);
      //close printOne
      await CloseBubble(1, page);
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
        await HoverParamsIdentifier(
          "multiplication",
          { n1: "a", n2: "b", i1: "n1", i2: "n2", parent: "main" },
          page
        );
        await ParamsIdentifier(
          "multiplication",
          { parent: "main", i1: "n1", i2:"n2",expect:5},
          page
        );
        // await HoverParamsIdentifier("division", page)
      }
    );
    await test.step("refresh, reload page", async () => {
      await page.evaluate(() => window.location.reload());
      const loading = await page.locator(".BubbleArea > p").count();
      expect(1).toEqual(loading);
    });

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
        await HoverParamsIdentifier(
          "multiplication",
          { n1: "a", n2: "b", i1: "n1", i2: "n2", parent: "main" },
          page
        );
        await ParamsIdentifier(
          "multiplication",
          { parent: "main", i1: "n1", i2:"n2",expect:5},
          page
        );
        // await HoverParamsIdentifier("division", page)
      }
    );

    await test.step("Buble order", async () => {
      //Test Order multiplication
      await OrderBubble(3, "3", page);
      //Test Order division
      await OrderBubble(2, "4", page);
      //Test Order printOne
      await OrderBubble(1, "10", page);
      //close multiplication
      await CloseBubble(3, page);
      //close division
      await CloseBubble(2, page);
      //close printOne
      await CloseBubble(1, page);
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
        await HoverParamsIdentifier(
          "multiplication",
          { n1: "a", n2: "b", i1: "n1", i2: "n2", parent: "main" },
          page
        );
        await ParamsIdentifier(
          "multiplication",
          { parent: "main", i1: "n1", i2:"n2",expect:5},
          page
        );
        // await HoverParamsIdentifier("division", page)
      }
    );
  });
});
