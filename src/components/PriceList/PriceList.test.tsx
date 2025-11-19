import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PRICELIST } from "../../posts/posts";
import { describe } from "vitest";
import { PriceList } from "./PriceList";

describe("PriceList", () => {
  it("Компонент корректно рендерит все данные переденные в пропсы", () => {
    render(<PriceList priceList={PRICELIST[0]} />);

    PRICELIST[0].forEach((el) => {
      expect(screen.getAllByText(el.description)).toBeDefined();
    });
  });
});
