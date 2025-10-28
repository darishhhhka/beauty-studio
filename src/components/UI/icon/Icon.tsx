type SizeLogo = { iconSize?: "normal" | "small"; url: string };

export const Icon = ({ iconSize = "normal", url }: SizeLogo) => {
  return (
    <div>
      <img className={iconSize} src={url} alt="" />
    </div>
  );
};
