import type { Product } from "./Test";

const MOCK_DATA = [
  { id: 1, name: "apple" },
  { id: 2, name: "banana" },
  { id: 3, name: "grape" },
  { id: 4, name: "orange" },
  { id: 5, name: "watermelon" },
  { id: 6, name: "pineapple" },
  { id: 7, name: "blueberry" },
  { id: 8, name: "strawberry" },
  { id: 9, name: "kiwi" },
  { id: 10, name: "mango" },
];


// Имитация запроса на сервер с задержкой
export const fetchData = (query: string): Promise<Product[]> => {
  console.log("отправка на сервер тяжелых расчетов");
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = MOCK_DATA.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    }, 500);
  });
};