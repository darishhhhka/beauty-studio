import "./Navbar.css";

type Props = { links: string[]; fontSize?: "normal" | "large" };
export const Navbar = ({ links, fontSize = "normal" }: Props) => {
  return (
    <ul className={`link-list ${fontSize}`}>
      {links.map((link) => (
        <li>{link}</li>
      ))}
    </ul>
  );
};
