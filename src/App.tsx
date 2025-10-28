import "./App.css";
import { Page } from "./components/UI/page/Page";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { ItemList } from "./components/ItemList/ItemList";
import { sevices, works, masters, cosmetics } from "./posts/posts";
import { Text } from "./components/Text/Text";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const links = ["Показать все", "Парикмахерские услуги", "Маникюр", "Педикюр"];

  return (
    <>
      <Page
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
    </>
  );
}

export default App;
