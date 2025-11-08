import { useRef, type Dispatch, type JSX, type SetStateAction } from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

type Props = {
  content: JSX.Element;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export const Modal = ({ content, isOpen, setOpen }: Props) => {
  const layout = useRef<HTMLDivElement | null>(null);

  const useClickOutside = () => {
    console.log(layout.current);
    if (layout.current) {
      layout.current.addEventListener(
        "click",
        (e) => {
          console.log("window is close");
          setOpen(false);
          e.stopPropagation();
        },
        true
      );
    }
  };

  const active = isOpen ? "modal active" : "modal";
  return createPortal(
    <div onClick={useClickOutside} ref={layout} className={active}>
      <div className="modal-content">{content}</div>
    </div>,
    document.body
  );
};
