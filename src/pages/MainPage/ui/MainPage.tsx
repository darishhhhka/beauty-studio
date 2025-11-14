import { useState } from "react";
import { About } from "@pages/MainPage/ui/About/About";
import { HomeScreen } from "@pages/MainPage/ui/HomeScreen/HomeScreen";
import { ItemList } from "@widgets/ItemList/ui/ItemList";
import { PhotoFiltering } from "@feature/PhotoFiltering/ui/PhotoFiltering";
import { Page } from "@shared/UI/page/Page";
import { COSMETICS, SERVICESCARD, WORKS } from "@shared/config/posts";
import "./MainaPage.css";
import type { Photo } from "@feature/PhotoFiltering/ui/PhotoFiltering";

export const MainPage = () => {
  const [photo, setPhoto] = useState<Photo[]>(WORKS);
  console.log(setPhoto);

  return (
    <>
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
    </>
  );
};
