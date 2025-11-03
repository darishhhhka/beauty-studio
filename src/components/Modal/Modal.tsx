import type { JSX } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

type Props = { content: JSX.Element; isOpen: boolean };
export const Modal = ({ content, isOpen }: Props) => {
  const active = isOpen ? "modal active" : "modal";
  return createPortal(
    <div className={active}>
      <div className="modal-content">{content}</div>
    </div>,
    document.body
  );
};
