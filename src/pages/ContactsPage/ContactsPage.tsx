import { Contacts } from "../../components/Contacts/Contacts";
import { Page } from "../../components/UI/page/Page";
import "./ContactsPage.css";

export const ContactsPage = () => {
  const contact = [
    "+7 (812) 123-45-67",
    "+7 (911) 123-45-67",
    "Новоостровский проспект, дом 36 лит. С",
  ];

  const mode = ["C 10:00 до 21:00 (Пн-Пт)", "С 11:00 до 20:00 (Сб-Вс)"];

  const links = [
    { title: "Главная", url: "/main" },
    { title: "Мастера", url: "/masters" },
    { title: "Цены", url: "/price" },
    { title: "Контакты", url: "/contacts" },
  ];

  return (
    <Page
      title="Контакты"
      content={
        <div className="page-content">
          <div style={{ position: "relative", overflow: "hidden" }}>
            <a
              href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "0px",
              }}
            >
              Санкт‑Петербург
            </a>
            <a
              href="https://yandex.ru/maps/geo/sankt_peterburg/53152804/?ll=30.305007%2C59.917966&utm_medium=mapframe&utm_source=maps&z=10.49"
              style={{
                color: "#eee",
                fontSize: "12px",
                position: "absolute",
                top: "14px",
              }}
            >
              Санкт-Петербург — Яндекс Карты
            </a>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=30.305007%2C59.917966&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE1MjgwNBIr0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsyIKDRSE8kEVNMFvQg%2C%2C&z=10.49"
              width="100%"
              height="576px"
              frameBorder="1"
              allowFullScreen
              style={{ position: "relative" }}
              title="Yandex Map"
            ></iframe>
          </div>
          <div className="contacts-container">
            <Contacts title="Контакты" info={contact} />
            <Contacts title="Режим работы" info={mode} />
            <Contacts title="Контакты" info={contact} />
            <Contacts title="Режим работы" info={mode} />
          </div>
        </div>
      }
    />
  );
};
