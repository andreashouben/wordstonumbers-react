import React from "react";
import { render, screen } from "@testing-library/react";
import { Division } from "./Division";

describe("Division", () => {
  it("should show 2 * 2 = 4, when given [2,2]", () => {
    render(<Division digits={[2, 2]} />);

    expect(screen.getByText("2 / 2 = 1")).toBeVisible();
  });

  it("should show 1 = 1, when given [1]", () => {
    render(<Division digits={[1]} />);

    expect(screen.getByText("1 = 1")).toBeVisible();
  });

  it("should show 4 / 2 = 2, when given [4,2]", () => {
    render(<Division digits={[4, 2]} />);

    expect(screen.getByText("4 / 2 = 2")).toBeVisible();
  });

  it("should show 3 / 6 = 0.5, when given [3,6]", () => {
    render(<Division digits={[3, 6]} />);

    expect(screen.getByText("3 / 6 = 0.5")).toBeVisible();
  });

  it("should show 3 / 0 = Infinity, when given [3,0]", () => {
    render(<Division digits={[3, 0]} />);

    expect(screen.getByText("3 / 0 = Infinity")).toBeVisible();
  });
});
