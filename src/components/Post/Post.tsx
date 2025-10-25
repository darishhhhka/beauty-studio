import { Image } from "../Image/Image";
import "./Post.css";

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
    <div className="container-post">
      <Image url={img.url} type={img.type} />
      {info && (
        <div className="container-post__info">
          <h4>{info.title}</h4>
          <span>{info.subTitle}</span>
        </div>
      )}
    </div>
  );
};
