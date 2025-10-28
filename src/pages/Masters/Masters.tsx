import { ItemList } from "../../components/ItemList/ItemList";
import { Page } from "../../components/UI/page/Page";
import { masters } from "../../posts/posts";

export const Masters = () => {
  return <Page content={<ItemList title="Наши мастера" posts={masters} />} />;
};
