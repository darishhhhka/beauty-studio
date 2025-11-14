import type { JSX } from "react";
import "./Page.css";
import { Footer } from "@widgets/Footer";
import { Header } from "@widgets/Header";

type Props = { title?: string; content: JSX.Element; hasBg?: boolean };
const contact = [
  "+7 (812) 123-45-67",
  "+7 (911) 123-45-67",
  "Новоостровский проспект, дом 36 лит. С",
];

const links = [
  { title: "Главная", url: "/main" },
  { title: "Мастера", url: "/masters" },
  { title: "Цены", url: "/price" },
  { title: "Контакты", url: "/contacts" },
];

const mode = ["C 10:00 до 21:00 (Пн-Пт)", "С 11:00 до 20:00 (Сб-Вс)"];

export const Page = ({ title, content, hasBg = false }: Props) => {
  const classHasBg = hasBg ? "page-bg" : "";
  return (
    <div className={`page ${classHasBg}`}>
      <div className="page-container">
        <Header links={links} />
        {title && (
          <div>
            <h1 className="page-title">{title}</h1>
          </div>
        )}
        {content}
        <Footer infoContacts={contact} infoMode={mode} />
      </div>
    </div>
  );
};
