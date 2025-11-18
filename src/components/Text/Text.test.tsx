import { Text } from "./Text";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Text", () => {
  it("Компонент рендерит текст, переданнй в пропс", () => {
    render(<Text children="hello" />);
    expect(screen.getByText("hello")).toBeInTheDocument();
  });
});
