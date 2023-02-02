import { CartReducer } from "@modules/cart";
import { modalReducer, pizzaReducer } from "@modules/pizzaList";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    cart: CartReducer,
    modal: modalReducer, // needs composition
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
