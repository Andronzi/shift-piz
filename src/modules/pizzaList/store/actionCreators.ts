import { AppDispatch } from "@store/store";
import { getPizzas } from "../api/getPizzas";
import { IClassificationType } from "./interfaces";
import { pizzaSlice } from "./pizzaReducer";

export const fetchPizzas =
  (classification?: keyof IClassificationType) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(pizzaSlice.actions.pizzasFetching());
      const response = await getPizzas(classification);
      dispatch(pizzaSlice.actions.pizzasFetchingSuccess(response.data));
    } catch (err: any) {
      dispatch(pizzaSlice.actions.pizzasFetchingError(err.message));
    }
  };
