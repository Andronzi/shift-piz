import { useAppDispatch } from "@store/hooks";
import { OutsideHighOrderFunctionForStore } from "../interfaces/functions";
import { Pizza } from "../store/interfaces";

export interface UseCartCallbacks {
  increase: (action: any) => any;
  deletePizza: (action: any) => any;
}

const useCart: OutsideHighOrderFunctionForStore = (
  increasePizza,
  deletePizzaFromCart,
): UseCartCallbacks => {
  const dispatch = useAppDispatch();

  return {
    increase(pizza: Pizza) {
      dispatch(increasePizza(pizza));
    },
    deletePizza(pizza: Pizza) {
      dispatch(deletePizzaFromCart(pizza));
    },
  };
};

export default useCart;
