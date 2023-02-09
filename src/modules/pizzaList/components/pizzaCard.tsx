import Button from "@src/ui/button";
import React from "react";
import { arrayToTextWithSlice } from "../helpers/arrayToText";
import { Pizza } from "../store/interfaces";

type IPizzaCardProps = {
  pizza: Pizza;
  onButtonClick: () => void;
};

const PizzaCard: React.FC<IPizzaCardProps> = ({ pizza, onButtonClick }) => (
  <div className="max-w-xs rounded-md phone:max-w-phone-card tablet:max-w-tablet-card">
    <img
      alt="pizza"
      className="mx-auto w-5/6 px-2"
      src={pizza.img}
    />
    <div className="pt-1">
      <p className="max-w-14em font-nunito font-semibold phone:text-sm tablet:text-md laptop:text-lg">
        {pizza.name}
      </p>
      <p className="mt-2 max-w-prose font-nunito text-gray-600 phone:text-xs tablet:text-xs laptop:text-sm">
        {arrayToTextWithSlice(pizza.ingredients)}
      </p>
      <div className="mt-4 flex items-center justify-between">
        <p className="text-center font-nunito font-bold phone:text-sm tablet:text-md laptop:text-lg">
          от {pizza.price.default} ₽
        </p>
        <Button
          onClick={onButtonClick}
          type="button">
          выбрать
        </Button>
      </div>
    </div>
  </div>
);

export default PizzaCard;
