import "./Contacts.css";

type Props = { title: string; info: string[] };

export const Contacts = ({ title, info }: Props) => {
  return (
    <div className="contacts">
      <h5 className="contacts__title">{title}</h5>
      <div className="constacts__list">
        {info.map((c) => (
          <span className="contacts__liist_item">{c}</span>
        ))}
      </div>
    </div>
  );
};
