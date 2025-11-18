import { Footer } from "./Footer";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MODE, CONTACTS } from "../../posts/posts";

describe("Footer", () => {
  it("Копонент отрисовывает данные переданные в пропсы", () => {
    render(<Footer infoContacts={CONTACTS} infoMode={MODE} />);
    MODE.forEach((el) => expect(screen.getByText(el)).toBeInTheDocument());
    CONTACTS.forEach((el) => expect(screen.getByText(el)).toBeInTheDocument());
  });
});
