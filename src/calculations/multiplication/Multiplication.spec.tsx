import React from "react";
import { render, screen } from "@testing-library/react";
import { Multiplication } from "./Multiplication";

describe("Multiplication", () => {
  it("should show 2 * 2 = 4, when given [2,2]", () => {
    render(<Multiplication digits={[2, 2]} />);

    expect(screen.getByText("2 * 2 = 4")).toBeVisible();
  });

  it("should show 1 = 1, when given [1]", () => {
    render(<Multiplication digits={[1]} />);

    expect(screen.getByText("1 = 1")).toBeVisible();
  });
});
