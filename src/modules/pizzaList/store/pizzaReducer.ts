import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { Pizza, PizzasState } from "./interfaces";

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: [],
    isLoading: false,
  } as PizzasState,
  reducers: {
    pizzasFetching(state) {
      state.isLoading = true;
    },

    pizzasFetchingSuccess(state, action: PayloadAction<Pizza[]>) {
      state.isLoading = false;
      state.pizzas = action.payload;
    },
    pizzasFetchingError(
      state,
      action?: PayloadAction<SerializedError | string>,
    ) {
      state.isLoading = false;

      if (action) {
        state.error = action.payload;
      }
    },
  },
});

export default pizzaSlice.reducer;
