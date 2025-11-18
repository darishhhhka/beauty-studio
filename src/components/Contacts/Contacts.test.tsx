import { Contacts } from "./Contacts";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { MODE } from "../../posts/posts";
import "@testing-library/jest-dom";

describe("Contacts", () => {
  it("Компонент рендерит данные, переданные ему в пропсы без каритнки", () => {
    render(<Contacts title="Режим работы" info={MODE} />);
    expect(screen.getByText("Режим работы")).toBeInTheDocument();
    MODE.forEach((el) => expect(screen.getByText(el)));
    expect(screen.queryByRole("img")).toBeNull();
  });
  it("Компонент рендерит картинку если передать в пропс logo=true", () => {
    render(<Contacts title="Контакты" logo={true} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
