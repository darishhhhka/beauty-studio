import { Post } from "../Post/Post";
import "./ItemList.css";

type PostType = {
  img: {
    url: string;
    type?: string;
  };
  info?: {
    title: string;
    subTitle?: string;
  };
};

type PaddingSize = "small" | "normal" | "large";

type Props = { title?: string; posts: PostType[]; paddingSize?: PaddingSize };

export const ItemList = ({ posts, title, paddingSize = "normal" }: Props) => {
  return (
    <div className="list">
      {title && <h2 className="list__title">{title}</h2>}
      <div className={`container__content ${paddingSize}`}>
        {posts.map((post) => (
          <Post img={post.img} info={post.info} />
        ))}
      </div>
    </div>
  );
};
