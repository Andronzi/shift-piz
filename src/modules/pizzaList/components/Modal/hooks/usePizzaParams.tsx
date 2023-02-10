import { CartPizza } from "@modules/cart/store/interfaces";
import { increasePizza, Pizza } from "@modules/pizzaList";
import { ICrustType, ISizeType } from "@modules/pizzaList/store/interfaces";
import { useAppDispatch } from "@store/hooks";
import React from "react";

export const usePizzaParams = (pizza: Pizza) => {
  const dispatch = useAppDispatch();
  const [pizzaParams, setPizzaParams] = React.useState<{
    size: ISizeType;
    crust: ICrustType;
  }>({
    size: {
      small: 0,
      medium: pizza.price?.size.medium,
      large: 0,
    },
    crust: {
      cheesy: 0,
      cheesySausage: 0,
    },
  });

  const changeSize = (size: keyof ISizeType) => {
    setPizzaParams(prevState => {
      const sizes = Object.fromEntries(
        Object.entries(prevState.size).map(([key]) =>
          key === size ? [key, pizza.price.size[size]] : [key, 0],
        ),
      );

      return {
        ...prevState,
        size: { ...prevState.size, ...sizes },
      };
    });
  };

  const changeCrust = (crustValue: keyof ICrustType) => {
    setPizzaParams(prevState => {
      const newCrust = Object.fromEntries(
        Object.entries(prevState.crust).map(([key, value]) => {
          if (key === crustValue && value > 0) {
            return [key, 0];
          }

          if (key === crustValue && value === 0) {
            return [key, pizza.price.crust[crustValue]];
          }

          return [key, value];
        }),
      );

      return {
        ...prevState,
        crust: {
          ...prevState.crust,
          ...newCrust,
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
