import { About } from "../../components/About/About";
import { HomeScreen } from "../../components/HomeScreen/HomeScreen";
import { ItemList } from "../../components/ItemList/ItemList";
import { Navbar } from "../../components/Navbar/Navbar";
import { Page } from "../../components/UI/page/Page";
import { cosmetics, sevices, works } from "../../posts/posts";
import "./MainaPage.css";

export const MainPage = () => {
  const links = ["Показать все", "Парикмахерские услуги", "Маникюр", "Педикюр"];
  return (
    <Page
      hasBg={true}
      content={
        <div className="page-content">
          <HomeScreen />
          <About />
          <ItemList posts={sevices} />
          <ItemList posts={cosmetics} paddingSize="large" />
          <ItemList
            content={<Navbar links={links} fontSize="large" />}
            title="Наши работы"
            posts={works}
            paddingSize="small"
          />
        </div>
      }
    />
  );
};
