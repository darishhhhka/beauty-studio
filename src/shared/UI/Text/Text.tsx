import "./Text.css";

type Props = { children: string };

export const Text = ({ children }: Props) => {
  return <div className="text">{children}</div>;
};
