import card1 from "../assets/services/card1.png";
import card2 from "../assets/services/card2.png";
import card3 from "../assets/services/card3.png";
import card4 from "../assets/services/card4.png";
import card5 from "../assets/services/card5.png";
import card6 from "../assets/services/card6.png";

import work1 from "../assets/works/work-1.png"
import work2 from "../assets/works/work-2.png"
import work3 from "../assets/works/work-3.png"
import work4 from "../assets/works/work-4.png"
import work5 from "../assets/works/work-5.png"
import work6 from "../assets/works/work-6.png"
import work7 from "../assets/works/work-7.png"
import work8 from "../assets/works/work-8.png"
import work9 from "../assets/works/work-9.png"

import master1 from "../assets/masters/master1.png"
import master2 from "../assets/masters/master2.png"
import master4 from "../assets/masters/master4.png"
import master5 from "../assets/masters/master5.png"
import master6 from "../assets/masters/master6.png"

import cosmetics1 from "../assets/cosmetics/cosmetics1.png"
import cosmetics2 from "../assets/cosmetics/cosmetics2.png"
import cosmetics3 from "../assets/cosmetics/cosmetics3.png"
import cosmetics4 from "../assets/cosmetics/cosmetics4.png"

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

export const works = [
  {img:{url: work1}},  
  {img:{url: work2}}, 
  {img:{url: work3}}, 
  {img:{url: work4}},  
  {img:{url: work5}},  
  {img:{url: work6}}, 
  {img:{url: work7}},
  {img:{url: work8}},
  {img:{url: work9}},
]

export const masters = [
  {
    img: { url: master1, type: "img-with-border" },
    info: {title: "Елена Васильевна", subTitle: "Визажист"}
  },
  {
    img: { url: master2, type: "img-with-border" },
    info: {title: "Елена Васильевна", subTitle: "Визажист"}
  },
  {
    img: { url: master1, type: "img-with-border" },
    info: {title: "Елена Васильевна", subTitle: "Визажист"}
  },
  {
    img: { url: master4, type: "img-with-border" },
    info: {title: "Елена Васильевна", subTitle: "Визажист"}
  },
  {
    img: { url: master5, type: "img-with-border" },
    info: {title: "Елена Васильевна", subTitle: "Визажист"}
  },
  {
    img: { url: master6, type: "img-with-border" },
    info: {title: "Елена Васильевна", subTitle: "Визажист"}
  },
]

export const cosmetics = [
  {img: {url: cosmetics1}},
  {img: {url: cosmetics2}},
  {img: {url: cosmetics3}},
  {img: {url: cosmetics4}}
]
