import { configureStore } from "@reduxjs/toolkit";
import { pizzaReducer } from "@src/modules/pizzaList";
import { CartReducer } from "@modules/cart";

export const store = configureStore({
    reducer: {
        pizza: pizzaReducer,
        cart: CartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;