import { render, screen } from "@testing-library/react";
import { Modal } from "./Modal";
import { test } from "@jest/globals";
// import "@testing-library/jest-dom";

test("render-modal", () => {
  render(<Modal isOpen={true} content={<div>hi</div>} setOpen={() => {}} />);
  expect(screen.findByTestId("test-modal")).toBeDefined();
});
