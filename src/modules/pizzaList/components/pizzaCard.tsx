import Button from "@src/ui/button";
import React from "react";
import { classes } from "../constants/pizzaCardClasses";
import { arrayToTextWithSlice } from "../helpers/arrayToText";
import { Pizza } from "../store/interfaces";

type PizzaCardProps = Pizza & {
  onButtonClick: () => void;
};

const PizzaCard: React.FC<PizzaCardProps> = React.memo(
  ({ img, name, ingredients, price, onButtonClick }) => (
    <div className={classes.cardWrapper}>
      <img
        alt="pizza"
        className={classes.image}
        src={img}
      />
      <div className={classes.infoWrapper}>
        <p className={classes.name}>{name}</p>
        <p className={classes.ingredients}>
          {arrayToTextWithSlice(ingredients)}
        </p>
        <div className={classes.downSticky}>
          <p className={classes.price}>от {price.default} ₽</p>
          <Button
            onClick={onButtonClick}
            type="button">
            выбрать
          </Button>
        </div>
      </div>
    </div>
  ),
);

export default PizzaCard;
