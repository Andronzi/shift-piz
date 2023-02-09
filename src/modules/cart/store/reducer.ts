import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { CartPizza, CartState } from "./interfaces";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzas: [],
    isLoading: false,
  } as CartState,
  reducers: {
    increasePizza(state: CartState, action: PayloadAction<CartPizza>) {
      const pizzasItems = state.pizzas.filter(
        pizza =>
          pizza.id === action.payload.id &&
          pizza.priceValue === action.payload.priceValue,
      );

      if (pizzasItems?.length) {
        pizzasItems[0].amount += 1;
      } else {
        state.pizzas.push(action.payload);
      }

      toast.success("Товар был добавлен", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    },

    decreasePizza(state: CartState, action: PayloadAction<CartPizza>) {
      const pizzasItems = state.pizzas.filter(
        pizza =>
          pizza.id === action.payload.id &&
          pizza.priceValue === action.payload.priceValue,
      );

      if (pizzasItems[0].amount === 1) {
        state.pizzas = state.pizzas.filter(
          pizza => pizza.id !== action.payload.id,
        );
      } else {
        pizzasItems[0].amount -= 1;
      }

      toast.success("Товар был удален", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    },

    deletePizzaFromCart(state: CartState, action: PayloadAction<CartPizza>) {
      state.pizzas = state.pizzas.filter(
        pizza =>
          pizza.id !== action.payload.id &&
          pizza.priceValue !== action.payload.priceValue,
      );

      toast.success("Товар был полностью удален", {
        duration: 1000,
        style: { fontFamily: "Montserrat" },
      });
    },
  },
});

export const { increasePizza, decreasePizza, deletePizzaFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
