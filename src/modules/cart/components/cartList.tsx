import { useAppSelector } from "@store/hooks";
import { RootState } from "@store/store";
import React from "react";
import CartItem from "./items/cartItem";

const CartList: React.FC = () => {
  const pizzas = useAppSelector((state: RootState) => state.cart.pizzas);
  return (
    <div className="min-h-[calc(100vh-12rem)] bg-slate-100 px-4 pt-2 pb-4">
      {pizzas.map(pizza => (
        <CartItem
          key={pizza.id}
          pizza={pizza}
        />
      ))}
    </div>
  );
};

export default CartList;
