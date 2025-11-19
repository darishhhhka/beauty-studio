import { describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Icon } from "./Icon";
import icon from "../../../assets/icons/icon-close.png";
import "@testing-library/jest-dom";

describe("Icon", () => {
  it("Компонент отрисовывает картинку, когда ему передали путь картинки в пропсы", () => {
    render(<Icon url={icon} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("Картинка рендерится маленким размером, переденным в пропсы", () => {
    render(<Icon url={icon} iconSize="small" />);
    expect(screen.getByRole("img")).toHaveClass("small");
  });

  it("Картинка рендерится обычным размером, если в пропсы не передать размер", () => {
    render(<Icon url={icon} />);
    expect(screen.getByRole("img")).toHaveClass("normal");
  });
});
