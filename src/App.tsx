import "./App.css";
import { ContactsPage } from "./pages/ContactsPage/ContactsPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { Masters } from "./pages/Masters/Masters";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Price } from "./pages/Price/Price";
import { Test } from "./pages/Test/Test.tsx";
import { Form } from "./components/Form/Form.tsx";
import { Modal } from "./components/Modal/Modal.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/masters" element={<Masters />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/price" element={<Price />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Navigate to="/main" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
