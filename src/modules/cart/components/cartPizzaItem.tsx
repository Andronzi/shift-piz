import close from "@icons/close.png";
import { CartPizza } from "@modules/cart/store/interfaces";
import { decreasePizza } from "@modules/cart/store/reducer";
import { deletePizzaFromCart, increasePizza } from "@modules/pizzaList";
import { ISizeType } from "@modules/pizzaList/store/interfaces";
import { useAppDispatch } from "@store/hooks";
import React from "react";

type CartItemProps = {
  pizza: CartPizza;
};

const CartItem: React.FC<CartItemProps> = ({ pizza }) => {
  const dispatch = useAppDispatch();

  const pizzaSizeConstants = {
    small: "Маленькая",
    medium: "Средняя",
    large: "Большая",
  };

  return (
    <div
      key={pizza.id}
      className="relative mx-auto mt-4 flex max-w-screen-xl items-center justify-between rounded-xl bg-white p-4">
      <div className="flex items-center">
        <img
          alt={pizza.name}
          src={pizza.img}
        />
        <div className="ml-2">
          <p className="font-nunito text-lg font-medium">{pizza.name}</p>
          <p className="mt-1 font-nunito text-sm">
            {pizzaSizeConstants[pizza.size as keyof ISizeType]}, 30 см.
            Традиционное тесто
          </p>
          <p className="mt-4 font-nunito text-lg font-medium">
            {pizza.priceValue} ₽
          </p>
        </div>
      </div>
      <div className="mt-2 flex h-8 w-36 items-center rounded-xl bg-slate-100">
        <button
          className="flex h-8 w-12 cursor-pointer items-center justify-center rounded-l-xl font-nunito text-xs duration-300 hover:bg-slate-500 hover:text-white"
          onClick={() => dispatch(decreasePizza(pizza))}
          type="button">
          -
        </button>
        <div className="flex h-8 w-12 items-center justify-center	 border-2 border-slate-100 bg-white font-nunito text-xs">
          {pizza.amount}
        </div>
        <button
          className="flex h-8 w-12 cursor-pointer items-center justify-center rounded-r-xl font-nunito text-xs duration-300 hover:bg-slate-500 hover:text-white"
          onClick={() => dispatch(increasePizza(pizza))}
          type="button">
          +
        </button>
      </div>
      <button
        className="absolute top-2 right-2"
        onClick={() => dispatch(deletePizzaFromCart(pizza))}
        type="button">
        <img
          alt="закрыть"
          className="h-4 w-4"
          src={close}
        />
      </button>
    </div>
  );
};

export default CartItem;
