import React from "react";
import arrayToText from "../helpers/arrayToText";
import { classes } from "../constants/pizzaCardClasses";

type PizzaCardProps = {
  imageSrc: string;
  name: string;
  ingredients: string[];
  price: number;
};

const PizzaCard: React.FC<PizzaCardProps> = ({
  imageSrc,
  name,
  ingredients,
  price,
}) => {
  return (
    <div className={classes.cardWrapper}>
      <img
        className={classes.image}
        src={imageSrc}
      />
      <div className={classes.infoWrapper}>
        <p className={classes.name}>{name}</p>
        <p className={classes.ingredients}>{arrayToText(ingredients)}</p>
        <div className={classes.downSticky}>
          <p className={classes.price}>от {price} ₽</p>
          <button className={classes.chooseButton}>выбрать</button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;