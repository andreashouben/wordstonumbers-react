import React from "react";
import { render, screen } from "@testing-library/react";
import { Addition } from "./Addition";

describe("Addition", () => {
  it("should render nothing if passed array is empty", () => {
    const { container } = render(<Addition digits={[]} />);

    expect(container.childNodes.length).toEqual(0);
  });

  it("should render 1 = 1 if only 1 is passed'", () => {
    render(<Addition digits={[1]} />);
    screen.getByText("1 = 1");
  });

  it("should render the addition leading to the sum", () => {
    render(<Addition digits={[1, 1]} />);
    screen.getByText("1 + 1 = 2");
  });

  it("should show the crossfoot if there's one", () => {
    render(<Addition digits={[9, 9]} />);
    screen.getByText("9 + 9 = 18 (QS: 1 + 8 = 9)");
  });

  it("should show the iteraded crossfoot if there's one", () => {
    render(<Addition digits={[26, 26, 26]} />);
    screen.getByText("26 + 26 + 26 = 78 (Iter. QS: 7 + 8 = 15; 1 + 5 = 6)");
  });
});
