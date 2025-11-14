import { PriceCard } from "@widgets/PriceList/ui/PriceCard/PriceCard";
import { Page } from "@shared/UI/page/Page";
import { PRICELIST } from "@shared/config/posts";

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
