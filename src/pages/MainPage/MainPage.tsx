import { About } from "../../components/About/About";
import { HomeScreen } from "../../components/HomeScreen/HomeScreen";
import { ItemList } from "../../components/ItemList/ItemList";
import { Navbar } from "../../components/Navbar/Navbar";
import { Page } from "../../components/UI/page/Page";
import { COSMETICS, SERVICESCARD, SERVICES, WORKS } from "../../posts/posts";
import "./MainaPage.css";

export const MainPage = () => {
  
  return (
    <Page
      hasBg={true}
      content={
        <div className="page-content">
          <HomeScreen />
          <About />
          <ItemList posts={SERVICESCARD} />
          <ItemList posts={COSMETICS} paddingSize="large" />
          <ItemList
            content={<Navbar links={SERVICES} fontSize="large" />}
            title="Наши работы"
            posts={WORKS}
            paddingSize="small"
          />
        </div>
      }
    />
  );
};
