import PizzaLoader from "@loaders/PizzaLoaders";
import { RootState } from "@store/store";
import React from "react";
import { getPizzas } from "../api/getPizzas";
import { pizzaContent } from "../constants/pizzaListClasses";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import PizzaCard from "./pizzaCard";
import useCart, { useCartReturn } from "../hooks/useCart";
import {
  changeShow,
  deletePizzaFromCart,
  increasePizza,
} from "@modules/pizzaList";

const PizzasList: React.FC = () => {
  const dispatch = useAppDispatch();
  const pizzaState = useAppSelector((state: RootState) => state.pizza);

  React.useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  //just for test
  const handleClick = () => {
    increase({
      id: 1,
      name: "Буженина с клюквенным соусом",
      ingredients: [
        "запеченная буженина из свинины",
        "клюквенный соус",
        "брусника",
        "красный лук",
        "моцарелла",
        "фирменный соус альфредо",
      ],
      img: "https://dodopizza-a.akamaihd.net/static/Img/Products/421b5f7975dd422ea59dbf1d9e1b1b95_138x138.jpeg",
      price: {
        default: 539,
        size: {
          small: 0,
          medium: 100,
          large: 200,
        },
        crust: {
          cheesy: 150,
          cheesySausage: 200,
        },
      },
      classifications: {
        new: true,
        spicy: false,
        vegetarian: false,
      },
    });
  };

  const { increase, deletePizza }: useCartReturn = useCart(
    increasePizza,
    deletePizzaFromCart,
  );

  if (!pizzaState.loading || pizzaState.loading === "pending") {
    return <PizzaLoader />;
  }

  return (
    <>
      <div className={pizzaContent}>
        {pizzaState.pizzas?.map(pizza => {
          return (
            <PizzaCard
              key={pizza.id}
              imageSrc={pizza.img}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price.default}
              showModal={() => dispatch(changeShow(true))}
            />
          );
        })}
      </div>
      <button onClick={handleClick}>click</button>
    </>
  );
};

export default PizzasList;
