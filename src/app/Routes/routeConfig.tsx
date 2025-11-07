import { Navigate, type RouteObject } from "react-router-dom";
import { MainPage } from "../../pages/MainPage/MainPage";
import { Masters } from "../../pages/Masters/Masters";
import { ContactsPage } from "../../pages/ContactsPage/ContactsPage";
import { Price } from "../../pages/Price/Price";

export const routeConfig: RouteObject[] = [
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/masters",
    element: <Masters />,
  },
  {
    path: "/contacts",
    element: <ContactsPage />,
  },
  {
    path: "/price",
    element: <Price />,
  },
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
];
