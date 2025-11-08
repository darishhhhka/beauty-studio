import { Icon } from "../UI/icon/Icon";
import { Logo } from "../UI/logo/Logo";
import "./Header.css";
import instagram from "../../assets/inst.png";
import menuButton from "../../assets/menuButton.png";
import { Line } from "../UI/line/Line";
import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { Form } from "../Form/Form";

type LinkType = { title: string; url: string };

type Props = { links: LinkType[] };

export const Header = ({ links }: Props) => {
  const mid = Math.floor(links.length / 2);
  const startLinks = links.slice(0, mid);
  const endLinks = links.slice(mid);
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <nav className="header-content">
          <Icon iconSize="small" url={instagram} />
          <Navbar links={startLinks} />
          <Logo />
          <Navbar links={endLinks} />
          <button onClick={() => setOpen(true)} className="header__sing-up">
            Записаться
          </button>
          <Icon url={menuButton} />
        </nav>
        <div className="line-container">
          <Line />
        </div>
      </header>

      <Modal
        setOpen={setOpen}
        content={<Form setOpen={setOpen} />}
        isOpen={open}
      />
    </>
  );
};
