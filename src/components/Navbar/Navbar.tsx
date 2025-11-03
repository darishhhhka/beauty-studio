import { Link } from "react-router-dom";
import "./Navbar.css";

type LinkType = { title: string; url: string };
type Props = { links: LinkType[]; fontSize?: "normal" | "large" };

export const Navbar = ({ links, fontSize = "normal" }: Props) => {
  const size = fontSize === "normal" ? "font-size_normal" : "font-size_small";
  return (
    <ul className={`link-list ${size}`}>
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
