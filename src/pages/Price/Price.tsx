import { PriceCard } from "../../components/PriceCard/PriceCard";
import { Page } from "../../components/UI/page/Page";
import { PRICELIST } from "../../posts/posts";

export const Price = () => {
  return (
    <Page
      title="Цены на услуги"
      content={
        <div className="page-content">
          {PRICELIST.map((p, index) => (
            <PriceCard priceList={p} index={index} />
          ))}
        </div>
      }
    />
  );
};
