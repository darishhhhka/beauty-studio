import { PriceCard } from "./PriceCard";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PRICELIST } from "../../posts/posts";

describe("PriceCard", () => {
  it("В компоненте первым рендерится картинка, если передать в пропсы index кратный 2", () => {
    render(<PriceCard priceList={PRICELIST[0]} index={2} />);
    const card = screen.getByTestId("test-price-card");
    expect(card.firstChild).toHaveClass("img");
  });

  it("В компоненте первым рендерится список, если передать в пропсы index не кратный 2", () => {
    render(<PriceCard priceList={PRICELIST[0]} index={1} />);
    const card = screen.getByTestId("test-price-card");
    expect(card.firstChild).toHaveClass("price-list");
  });
});
