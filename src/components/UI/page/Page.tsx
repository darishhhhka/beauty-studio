import type { JSX } from "react";
import "./Page.css";
import { Footer } from "../../Footer/Footer";
import { Header } from "../../Header/Header";

type Props = { content: JSX.Element };
const contact = [
  "+7 (812) 123-45-67",
  "+7 (911) 123-45-67",
  "Новоостровский проспект, дом 36 лит. С",
];

const links = ["Главная", "Мастера", "Цены", "Контакты"];

const mode = ["C 10:00 до 21:00 (Пн-Пт)", "С 11:00 до 20:00 (Сб-Вс)"];
export const Page = ({ content }: Props) => {
  return (
    <div className="page">
      <div className="page-bg">
        <div className="page-container">
          <Header links={links} />
          {content}
          <Footer infoContacts={contact} infoMode={mode} />
        </div>
      </div>
    </div>
  );
};
