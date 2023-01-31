import { useAppDispatch } from "@store/hooks";
import { OutsideHighOrderFunctionForStore } from "../interfaces/functions";
import { Pizza } from "../store/interfaces";

export interface useCartReturn {
  increase: (action: any) => any;
  deletePizza: (action: any) => any;
}

const useCart: OutsideHighOrderFunctionForStore = (
  increasePizza,
  deletePizzaFromCart,
): useCartReturn => {
  const dispatch = useAppDispatch();

  return {
    increase: function (pizza: Pizza) {
      dispatch(increasePizza(pizza));
    },
    deletePizza: function (pizza: Pizza) {
      dispatch(deletePizzaFromCart(pizza));
    },
  };
};

export default useCart;
