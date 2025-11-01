import { useState } from "react";
import { About } from "../../components/About/About";
import { HomeScreen } from "../../components/HomeScreen/HomeScreen";
import { ItemList } from "../../components/ItemList/ItemList";
import { PhotoFiltering } from "../../components/PhotoFiltering/PhotoFiltering";
import { Page } from "../../components/UI/page/Page";
import { COSMETICS, SERVICESCARD, SERVICES, WORKS } from "../../posts/posts";
import "./MainaPage.css";
import type { Photo } from "../../components/PhotoFiltering/PhotoFiltering";

export const MainPage = () => {
  const [photo, setPhoto] = useState<Photo[]>(WORKS);
  console.log(setPhoto);

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
            content={<PhotoFiltering setPhoto={setPhoto} />}
            title="Наши работы"
            posts={photo}
            paddingSize="small"
          />
        </div>
      }
    />
  );
};
