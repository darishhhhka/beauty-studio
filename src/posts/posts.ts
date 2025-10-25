import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";

type TypeServices = {
  img: {
    url: string, 
    type?: string
  }, 
  info?: {
    title: string, 
    subTitle?: string
  }
}

export const sevices: TypeServices[] = [
  {
    img: { url: card1, type: "img-with-border" },
    info: { title: "Парикмахерские услуги" },
  },
  {
    img: { url: card2, type: "img-with-border" },
    info: { title: "Маникюр" },
  },
  {
    img: { url: card3, type: "img-with-border" },
    info: { title: "Педикюр" },
  },
  {
    img: { url:  card4 , type: "img-with-border" },
    info: { title: "Косметология" },
  },
  {
    img: { url:  card5 , type: "img-with-border" },
    info: { title: "Эстетист по телу" },
  },
  {
    img: { url: card6, type: "img-with-border" },
    info: { title: "Визаж" },
  },
];
