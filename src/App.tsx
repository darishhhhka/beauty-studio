import { useState } from "react";
import "./App.css";
import { Page } from "./components/UI/page/Page";
import { HomeScreen } from "./components/HomeScreen/HomeScreen";

function App() {
  return (
    <>
      <Page
        content={
          <div>
            <HomeScreen />
          </div>
        }
      />
    </>
  );
}

export default App;
