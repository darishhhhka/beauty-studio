import "./Contacts.css";
import { Icon } from "../UI/icon/Icon";
import instagram from "../../assets/inst.png";

type Props = { title: string; info?: string[]; logo?: boolean };

export const Contacts = ({ title, info, logo = false }: Props) => {
  return (
    <div className="contacts">
      <h5 className="contacts__title">{title}</h5>
      <div className="constacts__list">
        {logo ? (
          <Icon url={instagram} />
        ) : (
          info &&
          info.map((c) => <span className="contacts__liist_item">{c}</span>)
        )}
      </div>
    </div>
  );
};
