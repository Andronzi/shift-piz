import { useAppDispatch } from "@store/hooks";
import React from "react";
import { classes } from "../constants/pizzaCardClasses";
import arrayToText from "../helpers/arrayToText";
import { Pizza } from "../store/interfaces";
import { changeShow } from "../store/modalReducer";
import Modal from "./Modal/Modal";

const PizzaCard: React.FC<Pizza> = ({ img, name, ingredients, price }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className={classes.cardWrapper}>
        <img
          alt="pizza"
          className={classes.image}
          src={img}
        />
        <div className={classes.infoWrapper}>
          <p className={classes.name}>{name}</p>
          <p className={classes.ingredients}>{arrayToText(ingredients)}</p>
          <div className={classes.downSticky}>
            <p className={classes.price}>от {price.default} ₽</p>
            <button
              className={classes.chooseButton}
              onClick={() => dispatch(changeShow(true))}>
              выбрать
            </button>
          </div>
        </div>
      </div>
      <Modal />
    </>
  );
};

export default PizzaCard;
