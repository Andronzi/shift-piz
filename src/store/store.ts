import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer, modalReducer } from "@modules/pizzaList";
import { CartReducer } from "@modules/cart";

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        cart: CartReducer,
        modal: modalReducer //needs composition
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;