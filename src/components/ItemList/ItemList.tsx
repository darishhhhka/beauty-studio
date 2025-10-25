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
type Props = { title?: string; posts: PostType[] };

export const ItemList = ({ posts, title }: Props) => {
  return (
    <div className="container">
      <h2>{title}</h2>
      <div className="container__content">
        {posts.map((post) => (
          <Post img={post.img} info={post.info} />
        ))}
      </div>
    </div>
  );
};
