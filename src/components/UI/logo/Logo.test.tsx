import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Logo } from "./Logo";
import icon from "../../../assets/icons/icon-close.png";
import "@testing-library/jest-dom";

describe("Logo", () => {
  it("Логотоип рендерится средним размером, если в пропсы ничего не передать", () => {
    render(<Logo />);
    expect(screen.getByRole("img")).toHaveClass("logo-medium");
  });

  it("Логотоип рендерится большим размером, если в пропсы передать large", () => {
    render(<Logo size="large" />);
    expect(screen.getByRole("img")).toHaveClass("logo-large");
  });
});
