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
  const [show, setShow] = React.useState(false);
  return (
    <>
      <PizzaCard
        classifications={classifications}
        id={id}
        img={img}
        ingredients={ingredients}
        name={name}
        onButtonClick={React.useCallback(() => setShow(true), [setShow])}
        price={price}
      />
      <Modal
        classifications={classifications}
        id={id}
        img={img}
        ingredients={ingredients}
        name={name}
        price={price}
        setShow={setShow}
        show={show}
      />
    </>
  );
};

export default PizzaCardWrapper;
