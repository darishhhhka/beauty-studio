import { ItemList } from "@widgets/ItemList/ui/ItemList";
import { Page } from "@shared/UI/page/Page";
import { MASTERS } from "@shared/config/posts";

export const Masters = () => {
  return <Page title="Наши мастера" content={<ItemList posts={MASTERS} />} />;
};
