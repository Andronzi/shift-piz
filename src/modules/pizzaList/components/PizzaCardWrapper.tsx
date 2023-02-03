import React from "react";
import { Pizza } from "../store/interfaces";
import Modal from "./Modal/Modal";
import PizzaCard from "./pizzaCard";

const PizzaCardWrapper: React.FC<Pizza> = ({
  id,
  img,
  name,
  classifications,
  ingredients,
  price,
}) => {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <>
      <PizzaCard
        classifications={classifications}
        id={id}
        img={img}
        ingredients={ingredients}
        name={name}
        onButtonClick={React.useCallback(() => setIsShow(true), [setIsShow])}
        price={price}
      />
      <Modal
        classifications={classifications}
        closeModal={() => setIsShow(false)}
        id={id}
        img={img}
        ingredients={ingredients}
        isShow={isShow}
        name={name}
        price={price}
      />
    </>
  );
};

export default PizzaCardWrapper;
