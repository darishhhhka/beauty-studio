import { Post } from "./Post";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MASTERS } from "../../posts/posts";

describe("Post", () => {
  it("Компонент отрисовывает все элементы, если в него передать все пропсы", () => {
    render(<Post img={MASTERS[0].img} info={MASTERS[0].info} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText(MASTERS[0].info.title)).toBeInTheDocument();
    expect(screen.getByText(MASTERS[0].info.subTitle)).toBeInTheDocument();
  });

  it("Компонет отрисовывает только картинку, если в пропсы передать объект только с путем картинки", () => {
    render(<Post img={MASTERS[0].img} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
