import { Pizza } from "@modules/pizzaList";
import { ISizeType } from "@modules/pizzaList/store/interfaces";
import { MetaStateData } from "@store/interfaces";

type ISize = {
  size: keyof ISizeType;
};

type ICrust = {
  cheesy: boolean;
  cheesySausage: boolean;
};

type IPizzaParams = ICrust & ISize;

export type CartPizza = Pizza & { amount: number } & {
  priceValue: number;
} & IPizzaParams;

export type CartState = {
  pizzas: CartPizza[];
} & MetaStateData;
