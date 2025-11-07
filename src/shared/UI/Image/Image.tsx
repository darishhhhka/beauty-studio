import "./Image.css";

type Props = { url: string; type?: string };
export const Image = ({ url, type }: Props) => {
  const border = type !== undefined ? "img-with-border" : "img";
  return (
    <div className="img">
      <img src={url} alt="" />
      <div className={border}></div>
    </div>
  );
};
