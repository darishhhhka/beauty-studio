import type { JSX } from "react";
import "./Page.css";

type Props = { content: JSX.Element };
export const Page = ({ content }: Props) => {
  return (
    <div className="page">
      <div>Header</div>
      {content}
      <div>Footer</div>
    </div>
  );
};
