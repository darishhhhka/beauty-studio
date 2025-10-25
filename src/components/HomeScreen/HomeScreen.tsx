import "./HomeScreen.css";
import logoMouse from "./mouse.png";

export const HomeScreen = () => {
  return (
    <section className="home-screen">
      <h1 className="home-screen__title">
        Салон красоты
        <br /> «Delote-Beauty»
        <br /> на Крестовском
      </h1>
      <div className="home-screen__sub-title">
        <img className="home-screen__sub-title_img" src={logoMouse} alt="" />
        <span>Прокрутите вниз</span>
      </div>
    </section>
  );
};
