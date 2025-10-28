import { Link } from "react-router-dom";
import "./Navbar.css";

type LinkType = { title: string; url: string };
type Props = { links: LinkType[]; fontSize?: "normal" | "large" };

export const Navbar = ({ links, fontSize = "normal" }: Props) => {
  return (
    <ul className={`link-list ${fontSize}`}>
      {links.map((link) => (
        <li>
          <Link className="link-item" to={link.url}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
