import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
