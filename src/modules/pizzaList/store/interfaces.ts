import { MetaStateData } from "@src/store/interfaces";

type ISizeType = {
  small: number;
  medium: number;
  large: number;
};

type ICrustType = {
  cheesy: number;
  cheesySausage: number;
};

export type IClassificationType = {
  new: boolean;
  spicy: boolean;
  vegetarian: boolean;
};

type ReadOnlySettings<T> = {
  readonly [K in keyof T]: T[K];
};

export type IPriceType = {
  default: number;
  size: ReadOnlySettings<ISizeType>;
  crust: ReadOnlySettings<ICrustType>;
};

type Pizza = {
  id: number;
  name: string;
  ingredients: string[];
  img: string;
  price: IPriceType;
  classifications: ReadOnlySettings<IClassificationType>;
};

type PizzasState = {
  pizzas: Pizza[];
} & MetaStateData;

type ModalState = {
  isShow: boolean;
};

export { Pizza, PizzasState, ModalState };

