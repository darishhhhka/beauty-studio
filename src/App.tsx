import "./App.css";
import { Page } from "./components/UI/page/Page";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { ItemList } from "./components/ItemList/ItemList";
import { sevices } from "./posts/posts";
import { Text } from "./components/Text/Text";
import { About } from "./components/About/About";

function App() {
  return (
    <>
      <Page
        content={
          <div className="page__content">
            <HomeScreen />
            <About />
            <ItemList posts={sevices} />
          </div>
        }
      />
    </>
  );
}

export default App;
