/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import close from "@icons/close.png";
import { arrayToText } from "@modules/pizzaList/helpers/arrayToText";
import { ICrustType, Pizza } from "@modules/pizzaList/store/interfaces";
import Button from "@src/ui/button";
import React from "react";
import { usePizzaParams } from "./hooks/usePizzaParams";
import Crust from "./items/Crust";

type Boolean<T> = {
  readonly [K in keyof T]: boolean;
};

type ModalProps = {
  pizza: Pizza;
  isShow: boolean;
  onClose: () => void;
};

const Modal = ({ isShow, onClose, pizza }: ModalProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { pizzaParams, changeSize, changeCrust, handleButtonClick, calcPrice } =
    usePizzaParams(pizza);

  const closeOnEscapeKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  React.useEffect(() => {
    ref.current?.focus();
  }, [isShow]);

  if (!isShow) {
    return null;
  }

  return (
    <div
      ref={ref}
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose}
      onKeyDown={closeOnEscapeKeyDown}
      role="button"
      tabIndex={-1}>
      {/* нам не нужен получать доступ к этому элементу по index */}
      <div
        className="relative flex items-center rounded-xl bg-white p-4"
        onClick={e => e.stopPropagation()}
        role="button"
        tabIndex={-1}>
        <img
          alt={pizza.name}
          className="h-96 w-96"
          src={pizza.img}
        />
        <div className="ml-8 max-w-lg">
          <h3 className="font-nunito text-2xl font-medium">{pizza.name}</h3>

          <p className="mt-2 max-w-xs font-nunito text-sm">
            {arrayToText(pizza.ingredients)}
          </p>
          <div className="mt-2 flex h-8 w-72 items-center rounded-xl bg-slate-100">
            <div
              className={`flex h-8 w-24 items-center justify-center rounded-xl ${
                pizzaParams.size.small && "border-4 border-slate-100 bg-white"
              }	font-nunito text-xs`}
              onClick={() => changeSize("small")}
              role="button">
              Маленькая
            </div>
            <div
              className={`flex h-8 w-24 items-center justify-center rounded-xl ${
                pizzaParams.size.medium && "border-4 border-slate-100 bg-white"
              } font-nunito text-xs`}
              onClick={() => changeSize("medium")}>
              Средняя
            </div>
            <div
              className={`flex h-8 w-24 items-center justify-center rounded-xl ${
                pizzaParams.size.large && "border-4 border-slate-100 bg-white"
              }	font-nunito text-xs`}
              onClick={() => changeSize("large")}>
              Большая
            </div>
          </div>
          <h3 className="mt-4 font-nunito text-2xl font-medium">
            Добавить по вкусу
          </h3>
          <div className="mt-4 flex">
            {Object.entries(pizzaParams.crust as Boolean<ICrustType>).map(
              ([key, value]: [string, boolean]) => (
                <Crust
                  isActive={value}
                  onClick={() => changeCrust(key as keyof ICrustType)}
                  price={pizza.price.crust[key as keyof ICrustType]}
                  src={key}
                  title={key}
                />
              ),
            )}
          </div>
          <Button
            className="mt-4 h-10 w-11/12 laptop:text-md"
            onClick={handleButtonClick}
            type="button">
            Добавить в корзину за {calcPrice()} ₽
          </Button>
          <button
            className="absolute top-2 right-2"
            onClick={onClose}
            type="button">
            <img
              alt="закрыть"
              className="h-5 w-5"
              src={close}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
