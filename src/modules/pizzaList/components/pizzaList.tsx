import { RootState } from "@store/store";
import React from "react";
import { getPizzas } from "../api/getPizzas";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import PizzaCard from "./pizzaCard";

const PizzasList = () => {
  const dispatch = useAppDispatch();
  const pizzaState = useAppSelector((state: RootState) => state.pizza);

  React.useEffect(() => {
    dispatch(getPizzas(""));
  }, []);

  return (
    <>
      <p>Pizzas</p>
      <div className="mx-auto max-w-screen-xl grid grid-cols-4 justify-items-center items-center gap-4">
        {pizzaState.pizzas?.map(pizza => {
          return (
            <PizzaCard
              imageSrc={pizza.img}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price.default}
            />
          );
        })}
      </div>
    </>
  );
};

export default PizzasList;
