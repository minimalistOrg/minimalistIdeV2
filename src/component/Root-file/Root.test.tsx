import { fireEvent, render, screen } from "@testing-library/react";
import store from "./Redux/store";
import Root from "./Root";
import { Provider } from "react-redux";
import Bubble from "../Bubble/Bubble";

test("Assert the bubble opens in the correct order and the tree updates", () => {
  render(
    <Provider store={store}>
      <Root />
    </Provider>
  );

  let BubbleMain = screen.getAllByTestId("Bubble");
  //cheking the first render
  expect(BubbleMain[0]).toBeInTheDocument();
  //
  const fncall = screen.getAllByTestId("fncall");
  fireEvent.click(fncall[9].children[0]);
  fireEvent.click(fncall[8].children[0]);
  fireEvent.click(fncall[7].children[0]);
  fireEvent.click(fncall[6].children[0]);
  fireEvent.click(fncall[5].children[0]);
  fireEvent.click(fncall[4].children[0]);

  //checking  bubbles order
  const BubbleOrder = screen.getAllByTestId("BubbleOrder");
  expect(BubbleOrder[1].getAttribute("data-order")).toContain("10");
  expect(BubbleOrder[2].getAttribute("data-order")).toContain("9");
  expect(BubbleOrder[3].getAttribute("data-order")).toContain("8");
  expect(BubbleOrder[4].getAttribute("data-order")).toContain("7");
  expect(BubbleOrder[5].getAttribute("data-order")).toContain("6");
  expect(BubbleOrder[6].getAttribute("data-order")).toContain("5");
  //checking calltree render
  const calltree = screen.getAllByTestId("calltree");
  expect(calltree[1]).toBeInTheDocument();
  expect(calltree[2]).toBeInTheDocument();
  expect(calltree[3]).toBeInTheDocument();
  expect(calltree[4]).toBeInTheDocument();
  expect(calltree[5]).toBeInTheDocument();
  expect(calltree[6]).toBeInTheDocument();
});

test("Assert the bubble closes and the tree updates", () => {
  render(
    <Provider store={store}>
      <Root />
    </Provider>
  );

  //cheking the first render
  const close = screen.getAllByTestId("closeBubble");
  fireEvent.click(close[0]);

  const BubbleMain = screen.queryByTestId("Bubble");
  const calltree = screen.queryByTestId("calltree");
  console.log(BubbleMain)
  expect(BubbleMain).toBeNull()
  expect(calltree).toBeNull()

});
