import { Line } from "../UI/line/Line";
import "./PriceList.css";

type PriceItem = {
  title: string;
  description: string;
  price: number;
};
type Props = { priceList: PriceItem[] };

export const PriceList = ({ priceList }: Props) => {
  return (
    <div className="price-list">
      {priceList.map((p) => (
        <div className="price-container">
          <div className="price-item">
            <div className="price-item__title-subtitle">
              <h5 className="price-item__title">{p.title}</h5>
              <p className="price-item__subtitle">{p.description}</p>
            </div>
            <div className="price-item__price">{`${p.price} ₽ `}</div>
          </div>
          <Line />
        </div>
      ))}
    </div>
  );
};
