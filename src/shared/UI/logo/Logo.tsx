import logo from "./logo.png";
import "./Logo.css";

type Props = { size?: "medium" | "large" };

export const Logo = ({ size = "medium" }: Props) => {
  const logoSize = size === "large" ? "logo-large" : "logo-medium";
  return (
    <div>
      <img className={logoSize} src={logo} alt="Логотип" />
    </div>
  );
};
