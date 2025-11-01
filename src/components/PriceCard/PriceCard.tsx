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
        <div className="price-card">
          <Image url={priceCard} />
          <PriceList priceList={priceList} />
        </div>
      ) : (
        <div className="price-card">
          <PriceList priceList={priceList} />
          <Image url={priceCard} />
        </div>
      )}
    </>
  );
};
