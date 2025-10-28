import "./App.css";
import { Page } from "./components/UI/page/Page";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";
import { ItemList } from "./components/ItemList/ItemList";
import { sevices, works, masters, cosmetics } from "./posts/posts";
import { Text } from "./components/Text/Text";
import { About } from "./components/About/About";
import { Navbar } from "./components/Navbar/Navbar";
import { MainPage } from "./pages/MainPage/MainPage";
import { Masters } from "./pages/Masters/Masters";

function App() {
  return (
    <>
      <MainPage />
      {/* <Masters /> */}
    </>
  );
}

export default App;
