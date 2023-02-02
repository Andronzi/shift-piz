import React from "react";
import arrayToText from "../helpers/arrayToText";
import { classes } from "../constants/pizzaCardClasses";
import { useAppDispatch } from "@store/hooks";
import { changeShow } from "../store/modalReducer";
import { Pizza } from "../store/interfaces";

const PizzaCard: React.FC<Pizza> = ({ img, name, ingredients, price }) => {
  const dispatch = useAppDispatch();
  return (
    <div className={classes.cardWrapper}>
      <img
        className={classes.image}
        src={img}
      />
      <div className={classes.infoWrapper}>
        <p className={classes.name}>{name}</p>
        <p className={classes.ingredients}>{arrayToText(ingredients)}</p>
        <div className={classes.downSticky}>
          <p className={classes.price}>от {price} ₽</p>
          <button
            onClick={() => dispatch(changeShow(true))}
            className={classes.chooseButton}>
            выбрать
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
