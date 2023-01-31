import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/errorPage/errorPage";
import "./index.css";
import { store } from "./store/store";
import PizzasList from "@modules/pizzaList/components/pizzaList";
import Root from "@pages/root/root";

//Пока нет главной страницы будет так
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/menu",
        element: <PizzasList />,
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
