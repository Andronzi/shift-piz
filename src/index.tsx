import CartList from "@modules/cart/components/cartList";
import Menu from "@pages/menu/menu";
import Root from "@pages/root/root";
import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./css/index.css";
import ErrorPage from "./pages/errorPage/errorPage";
import { store } from "./store/store";

// errorElement не обладает Navbar и Footer (надо будет решить эту проблему)
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
      {
        path: "/cart",
        element: <CartList />,
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
