import React from "react";
import { render, screen } from "@testing-library/react";
import { Subtraction } from "./Subtraction";

describe("Subtraction", () => {
  it("should show 1 = 1 when given 1", () => {
    render(<Subtraction digits={[1]} />);

    expect(screen.getByText("1 = 1")).toBeVisible();
  });

  it("should show 1 - 1 = 0 when given [1,1]", () => {
    render(<Subtraction digits={[1, 1]} />);

    expect(screen.getByText("1 - 1 = 0")).toBeVisible();
  });

  it("should show 2 - 1 - 2 = -1 when given [2,1,1]", () => {
    render(<Subtraction digits={[2, 1, 2]} />);

    expect(screen.getByText("2 - 1 - 2 = -1")).toBeVisible();
  });
});
