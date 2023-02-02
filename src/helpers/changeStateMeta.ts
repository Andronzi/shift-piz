import { PizzasState } from "@src/modules/pizzaList/store/interfaces";
import { MetaStateData } from "@src/store/interfaces";

export const changeStateMeta = (
  { loading, currentRequestId, error }: MetaStateData,
  state: PizzasState,
) => {
  state.loading = loading;
  state.currentRequestId = currentRequestId;
  state.error = error;
};
