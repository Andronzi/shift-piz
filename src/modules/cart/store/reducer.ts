import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartPizza, CartState } from "./interfaces";
import { Pizza } from "@modules/pizzaList";

const cartSlice = createSlice({
    name: "cart",
    initialState: { pizzas: [], loading: null, currentRequestId: null, error: null } as CartState,
    reducers: {
        increasePizza(state: CartState, action: PayloadAction<Pizza>) {
            const pizza = state.pizzas?.filter((pizza) => { pizza.id === action.payload.id});
            
            if (pizza?.length) {
                pizza[0].amount++ 
            } else {
                const cartPizza = {...action.payload} as CartPizza;
                
                cartPizza.amount = 1;
                state.pizzas?.push(cartPizza);
            }
        },

        decreasePizza(state: CartState, action: PayloadAction<Pizza>) {
            state.pizzas?.filter((pizza) => { pizza.id === action.payload.id ? pizza.amount-- : null});
        },

        deletePizzaFromCart(state: CartState, action: PayloadAction<Pizza>) {
            state.pizzas = state.pizzas?.filter((pizza) => { pizza.id !== action.payload.id });
        }
    }
})

export const { increasePizza, decreasePizza, deletePizzaFromCart } = cartSlice.actions;
export default cartSlice.reducer;
