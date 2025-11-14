import {
  useEffect,
  useRef,
  type Dispatch,
  type JSX,
  type SetStateAction,
} from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

type Props = {
  content: JSX.Element;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};
export const Modal = ({ content, isOpen, setOpen }: Props) => {
  const layoutContent = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      layoutContent.current &&
      !layoutContent.current.contains(e.target as Node)
    ) {
      setOpen(false);
    }
  };

  const active = isOpen ? "modal active" : "modal";
  return createPortal(
    <div className={active} onClick={handleClick} data-testid={"test-modal"}>
      <div ref={layoutContent} className="modal-content">
        {content}
      </div>
    </div>,
    document.body
  );
};
