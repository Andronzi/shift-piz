import { Pizza } from "@modules/pizzaList";
import { MetaStateData } from "@store/interfaces";

export type CartPizza = Pizza & { amount: number };

export type CartState = {
  pizzas: CartPizza[];
} & MetaStateData;
