import PizzaLoader from "@loaders/PizzaLoaders";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { RootState } from "@store/store";
import React from "react";
import { pizzaContent } from "../constants/pizzaListClasses";
import { fetchPizzas } from "../store/actionCreators";
import { Pizza } from "../store/interfaces";
import PizzaCard from "./pizzaCard";

const PizzasList: React.FC = () => {
  const dispatch = useAppDispatch();
  const pizzaState = useAppSelector((state: RootState) => state.pizza);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  if (pizzaState.isLoading) {
    return <PizzaLoader />;
  }

  return (
    <div className={pizzaContent}>
      {pizzaState.pizzas.map((pizza: Pizza) => (
        <PizzaCard
          key={pizza.id}
          classifications={pizza.classifications}
          id={pizza.id}
          img={pizza.img}
          ingredients={pizza.ingredients}
          name={pizza.name}
          price={pizza.price}
        />
      ))}
    </div>
  );
};

export default PizzasList;
