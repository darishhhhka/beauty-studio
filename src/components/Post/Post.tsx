import { Image } from "../Image/Image";

type Props = {
  img: {
    url: string;
    type?: string;
  };
  info?: {
    title: string;
    subTitle?: string;
  };
};

export const Post = ({ img, info }: Props) => {
  return (
    <div>
      <Image url={img.url} type={img.type} />
      {info && (
        <div>
          <h4>{info.title}</h4>
          <span>{info.subTitle}</span>
        </div>
      )}
    </div>
  );
};
