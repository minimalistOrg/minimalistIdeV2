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

const url =
  "http://localhost:5000/?repository=https://gist.github.com/Usielrivas/467dea6f02b843258f724f781dfc18b1/bc89106683ae185a0c9de92d5360afe863a971da&stacktrace=[index.js:49,index.js:31,index:5,index:15]";

test.describe.configure({ mode: "parallel" });
test.describe("test for stacktrace gist general", () => {
  test("test load repo", async ({ page }) => {
    await page.goto(url);

    await test.step(
      "hover from calltree div to bubble & identifier",
      async () => {
        const listTreefn = page.locator(".liBubble");
        //
        await HoverTree(true, false, 0, "main", listTreefn, page);
        await HoverTree(true, true, 1, "logic", listTreefn, page);
        await HoverTree(true, true, 2, "subtraction", listTreefn, page);
        //without hover
        await HoverTree(false, false, 0, "main", listTreefn, page);
        await HoverTree(false, true, 1, "logic", listTreefn, page);
        await HoverTree(false, true, 2, "subtraction", listTreefn, page);
      }
    );

    await test.step("testing hover from fncall to bubbles", async () => {
      await HoverCallTree("logic", page);
      await HoverCallTree("subtraction", page);
      await WithoutHoverCallTree("logic", page);
      await WithoutHoverCallTree("subtraction", page);
    });
    await test.step("testing hover from bubble to fncall", async () => {
      await HoverBubbleHeader("logic", page);
      await HoverBubbleHeader("subtraction", page);
      await BubbleHeader("logic", page);
      await BubbleHeader("subtraction", page);
    });

    await test.step(
      "testing hover from params to identifier (b <=> b )",
      async () => {
        await HoverParamsIdentifier(
          "logic",
          { n1: "data1", n2: "data2", i1: "n1", i2: "n2", parent: "main" },
          page
        );
        await HoverParamsIdentifier(
          "subtraction",
          { n1: "a", n2: "b", i1: "data1", i2: "data2", parent: "logic" },
          page
        );
        await ParamsIdentifier(
          "logic",
          { parent: "logic", i1: "data1", i2: "data2", expect: 5 },
          page
        );
        await ParamsIdentifier(
          "subtraction",
          { parent: "subtraction", i1: "a", i2: "b", expect: 2 },
          page
        );
        // await HoverParamsIdentifier("division", page)
      }
    );

    await test.step("Buble order", async () => {
      //Open multiplication
      await OpenBubble(1, page);
      //Test Order multiplication
      await OrderBubble(3, "3", page);
      //Test Order logic
      await OrderBubble(1, "2", page);
      //close multiplication
      await CloseBubble(3, page);
    });

    await test.step(
      "hover from calltree div to bubble & identifier",
      async () => {
        const listTreefn = page.locator(".liBubble");
        //
        await HoverTree(true, false, 0, "main", listTreefn, page);
        await HoverTree(true, true, 1, "logic", listTreefn, page);
        await HoverTree(true, true, 2, "subtraction", listTreefn, page);
        //without hover
        await HoverTree(false, false, 0, "main", listTreefn, page);
        await HoverTree(false, true, 1, "logic", listTreefn, page);
        await HoverTree(false, true, 2, "subtraction", listTreefn, page);
      }
    );

    await test.step("testing hover from fncall to bubbles", async () => {
      await HoverCallTree("logic", page);
      await HoverCallTree("subtraction", page);
      await WithoutHoverCallTree("logic", page);
      await WithoutHoverCallTree("subtraction", page);
    });
    await test.step("testing hover from bubble to fncall", async () => {
      await HoverBubbleHeader("logic", page);
      await HoverBubbleHeader("subtraction", page);
      await BubbleHeader("logic", page);
      await BubbleHeader("subtraction", page);
    });

    await test.step(
      "testing hover from params to identifier (b <=> b )",
      async () => {
        await HoverParamsIdentifier(
          "logic",
          { n1: "data1", n2: "data2", i1: "n1", i2: "n2", parent: "main" },
          page
        );
        await HoverParamsIdentifier(
          "subtraction",
          { n1: "a", n2: "b", i1: "data1", i2: "data2", parent: "logic" },
          page
        );
        await ParamsIdentifier(
          "logic",
          { parent: "logic", i1: "data1", i2: "data2", expect: 5 },
          page
        );
        await ParamsIdentifier(
          "subtraction",
          { parent: "subtraction", i1: "a", i2: "b", expect: 2 },
          page
        );
        // await HoverParamsIdentifier("division", page)
      }
    );

  });
  //
});
