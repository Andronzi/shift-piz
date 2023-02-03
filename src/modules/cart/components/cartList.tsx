import { useAppSelector } from "@store/hooks";
import { RootState } from "@store/store";
import React from "react";

const CartList: React.FC = () => {
  const pizzas = useAppSelector((state: RootState) => state.cart.pizzas);

  return (
    <div className="min-h-[calc(100vh-12rem)] bg-slate-100 px-4 pt-2 pb-4">
      {pizzas.map(pizza => (
        <div
          key={pizza.id}
          className="flex max-w-screen-xl mx-auto p-4 bg-white mt-4 rounded-xl">
          <div className="flex items-center">
            <img
              alt={pizza.name}
              src={pizza.img}
            />
            <div className="ml-2">
              <p className="font-nunito text-lg font-medium">{pizza.name}</p>
              <p className="font-nunito text-sm mt-1">
                Средняя, 30 см. Традиционное тесто
              </p>
              <p className="mt-4 font-nunito text-lg font-medium">
                {pizza.price.default} ₽
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
