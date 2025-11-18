import { Header } from "./Header";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LINKS } from "../../posts/posts";
import { MemoryRouter } from "react-router-dom";

describe("Header", () => {
  it("Комопнент отрисовывает текст переданный в пропсы", () => {
    render(
      <MemoryRouter>
        <Header links={LINKS} />
      </MemoryRouter>
    );
    LINKS.forEach((el) => {
      expect(screen.getByText(el.title)).toBeInTheDocument();
    });
  });
});
