import { Pizza } from "@modules/pizzaList";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartPizza, CartState } from "./interfaces";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    pizzas: [],
    isLoading: false,
  } as CartState,
  reducers: {
    increasePizza(state: CartState, action: PayloadAction<Pizza>) {
      const pizzasItems = state.pizzas.filter(
        pizza => pizza.id === action.payload.id,
      );

      if (pizzasItems?.length) {
        pizzasItems[0].amount += 1;
      } else {
        const cartPizza = { ...action.payload } as CartPizza;

        cartPizza.amount = 1;
        state.pizzas?.push(cartPizza);
      }
    },

    decreasePizza(state: CartState, action: PayloadAction<Pizza>) {
      state.pizzas.forEach(pizza => {
        if (pizza.id === action.payload.id) {
          pizza.amount -= 1;
        }
      });
    },

    deletePizzaFromCart(state: CartState, action: PayloadAction<Pizza>) {
      state.pizzas = state.pizzas?.filter(
        pizza => pizza.id !== action.payload.id,
      );
    },
  },
});

export const { increasePizza, decreasePizza, deletePizzaFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
