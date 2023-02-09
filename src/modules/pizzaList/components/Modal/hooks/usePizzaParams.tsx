import { CartPizza } from "@modules/cart/store/interfaces";
import { increasePizza, Pizza } from "@modules/pizzaList";
import { ICrustType, ISizeType } from "@modules/pizzaList/store/interfaces";
import { useAppDispatch } from "@store/hooks";
import React from "react";

type Boolean<T> = {
  readonly [K in keyof T]: boolean;
};

type PizzaParams = {
  size: Boolean<ISizeType>;
  crust: Boolean<ICrustType>;
};

export const usePizzaParams = (pizza: Pizza) => {
  const dispatch = useAppDispatch();
  const [pizzaParams, setPizzaParams] = React.useState<PizzaParams>({
    size: {
      small: false,
      medium: true,
      large: false,
    },
    crust: {
      cheesy: false,
      cheesySausage: false,
    },
  });

  const changeSize = (size: keyof ISizeType) => {
    setPizzaParams(prevState => {
      const sizes = Object.fromEntries(
        Object.entries(prevState.size).map(value => [value[0], false]),
      );

      sizes[size] = true;

      return {
        ...prevState,
        size: { ...prevState.size, ...sizes },
      };
    });
  };

  const changeCrust = (crustValue: keyof ICrustType) => {
    setPizzaParams(prevState => {
      const crust = { ...prevState.crust };

      crust[crustValue] = !crust[crustValue];

      return {
        ...prevState,
        crust: {
          ...prevState.crust,
          ...crust,
        },
      };
    });
  };

  const calcPrice = () => {
    let defaultPrice = pizza.price.default;
    Object.entries(pizzaParams.size).forEach(value => {
      if (value[1]) {
        // @ts-ignore
        defaultPrice += pizza.price.size[value[0]];
      }
    });

    Object.entries(pizzaParams.crust).forEach(value => {
      if (value[1]) {
        // @ts-ignore
        defaultPrice += pizza.price.crust[value[0]];
      }
    });

    return defaultPrice;
  };

  const handleButtonClick = () => {
    const size = Object.entries(pizzaParams.size).filter(value =>
      value[1] ? value[0] : null,
    );

    const cartPizza = {
      ...pizza,
      amount: 1,
      size: size[0][0],
      crust: pizzaParams.crust,
      priceValue: calcPrice(),
    } as unknown as CartPizza;
    dispatch(increasePizza(cartPizza));
  };

  return { pizzaParams, changeSize, changeCrust, handleButtonClick, calcPrice };
};
