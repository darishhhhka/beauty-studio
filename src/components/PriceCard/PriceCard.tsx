import priceCard from "../../assets/price-card.png";
import { Image } from "../Image/Image";
import { PriceList } from "../PriceList/PriceList";
import "./PriceCard.css";

type PriceItem = {
  title: string;
  description: string;
  price: number;
};

type Props = { priceList: PriceItem[]; index: number };

export const PriceCard = ({ priceList, index }: Props) => {
  return (
    <>
      {index % 2 === 0 ? (
        <div data-testid="test-price-card" className="price-card">
          <Image data-testid="test-price-card-img" url={priceCard} />
          <PriceList data-testid="test-price-card-list" priceList={priceList} />
        </div>
      ) : (
        <div data-testid="test-price-card" className="price-card">
          <PriceList priceList={priceList} />
          <Image url={priceCard} />
        </div>
      )}
    </>
  );
};
