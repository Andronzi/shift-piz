import { AppDispatch } from "@store/store";
import axios from "axios";
import { IClassificationType, Pizza } from "./interfaces";
import { pizzaSlice } from "./pizzaReducer";

export const fetchPizzas =
  (classification?: keyof IClassificationType) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(pizzaSlice.actions.pizzasFetching());
      const response = await axios.get<Pizza[]>(
        `https://shift-winter-2023-backend.onrender.com/api/pizza?${classification}`,
      );
      dispatch(pizzaSlice.actions.pizzasFetchingSuccess(response.data));
    } catch (err: any) {
      dispatch(pizzaSlice.actions.pizzasFetchingError(err.message));
    }
  };
