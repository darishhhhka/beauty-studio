import { type SetStateAction, type Dispatch } from "react";
import { WORKS, SERVICES } from "@/shared/config/posts";
import "./PhotoFiltering.css";

export type Photo = {
  img: {
    url: string;
  };
  type: string;
};

type Props = { setPhoto: Dispatch<SetStateAction<Photo[]>> };

export const PhotoFiltering = ({ setPhoto }: Props) => {
  const filtering = (type: string) => {
    let newPhoto: Photo[] = [];
    if (type === "showAll") {
      newPhoto = WORKS;
    } else {
      newPhoto = WORKS.filter((p) => p.type === type);
    }
    setPhoto(newPhoto);
  };

  return (
    <div className="photo-filtering">
      {SERVICES.map((s) => (
        <button
          className="photo-filtering__item"
          onClick={() => filtering(s.type)}
          key={s.title}
        >
          {s.title}
        </button>
      ))}
    </div>
  );
};
