import PizzaLoader from "@src/components/loaders/PizzaLoaders";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { RootState } from "@store/store";
import React from "react";
import { fetchPizzas } from "../store/actionCreators";
import { Pizza } from "../store/interfaces";
import Modal from "./Modal/Modal";
import PizzaCard from "./pizzaCard";

const PizzasList: React.FC = () => {
  const dispatch = useAppDispatch();
  const pizzaState = useAppSelector((state: RootState) => state.pizza);
  const [currentPizza, setCurrentPizza] = React.useState<Pizza>({} as Pizza);
  const [isShow, setIsShow] = React.useState(false);

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  if (pizzaState.isLoading) {
    return <PizzaLoader />;
  }

  return (
    <>
      <ul
        className="mx-auto grid max-w-screen-xl items-center justify-items-center 
                gap-4 p-4 phone:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4">
        {pizzaState.pizzas.map((pizza: Pizza) => (
          <li key={pizza.id}>
            <PizzaCard
              onButtonClick={() => {
                setIsShow(true);
                setCurrentPizza(pizza);
              }}
              pizza={pizza}
            />
          </li>
        ))}
      </ul>
      <Modal
        isShow={isShow}
        onClose={() => setIsShow(false)}
        pizza={currentPizza}
      />
    </>
  );
};

export default PizzasList;
