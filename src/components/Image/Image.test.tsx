import { Image } from "./Image";
import img from "../../assets/price-card.png";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";

describe("Image", () => {
  it("Компонент рендерит картинку, когда в пропсы передали путь до картинки", () => {
    render(<Image url={img} />);
    expect(screen.getByRole("img")).toBeDefined();
  });
  it("Компонент рендерит картинку с обводкой, если ему пеедать нужный тип", () => {
    render(<Image url={img} type="img-with-border" />);
    expect(screen.getByTestId("image-with-border")).toBeDefined();
  });
});
