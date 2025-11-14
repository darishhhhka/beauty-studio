import { useRoutes } from "react-router-dom";
import { routeConfig } from "./routeConfig";

export const AppRoutes = () => {
  return useRoutes(routeConfig);
};
