import { Contacts } from "@shared/UI/Contacts/Contacts";
import { Line } from "@shared/UI/line/Line";
import { Logo } from "@shared/UI/logo/Logo";
import "./Footer.css";

type Props = { infoContacts: string[]; infoMode: string[] };

export const Footer = ({ infoContacts, infoMode }: Props) => {
  return (
    <footer className="footer-container">
      <Line />
      <div className="footer">
        <Logo size="large" />
        <Contacts title="Контакты" info={infoContacts} />
        <Contacts title="Режим работы" info={infoMode} />
        <Contacts title="Мы в инстаграм" logo={true} />
      </div>
      <Line />
    </footer>
  );
};
