import Menu from "@pages/menu/menu";
import Root from "@pages/root/root";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import ErrorPage from "./pages/errorPage/errorPage";
import { store } from "./store/store";

// Пока нет главной страницы будет так
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/menu",
        element: <Menu />,
      },
    ],
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
);
