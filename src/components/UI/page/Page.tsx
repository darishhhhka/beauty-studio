import type { JSX } from "react";
import "./Page.css";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";
import { LINKS, MODE, CONTACTS } from "../../../posts/posts";

type Props = { title?: string; content: JSX.Element; hasBg?: boolean };

export const Page = ({ title, content, hasBg = false }: Props) => {
  const classHasBg = hasBg ? "page-bg" : "";
  return (
    <div className={`page ${classHasBg}`}>
      <div className="page-container">
        <Header links={LINKS} />
        {title && (
          <div>
            <h1 className="page-title">{title}</h1>
          </div>
        )}
        {content}
        <Footer infoContacts={CONTACTS} infoMode={MODE} />
      </div>
    </div>
  );
};
