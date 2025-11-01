import { ItemList } from "../../components/ItemList/ItemList";
import { Page } from "../../components/UI/page/Page";
import { MASTERS } from "../../posts/posts";

export const Masters = () => {
  return <Page title="Наши мастера" content={<ItemList posts={MASTERS} />} />;
};
