import close from "@icons/close.png";
import { increasePizza } from "@modules/cart";
import { arrayToText } from "@modules/pizzaList/helpers/arrayToText";
import Button from "@src/ui/button";
import { useAppDispatch } from "@store/hooks";
import React from "react";
import { Pizza } from "../../store/interfaces";

type ModalProps = {
  isShow: boolean;
  closeModal: () => void;
} & Pizza;

const Modal = ({
  isShow,
  closeModal,
  id,
  name,
  ingredients,
  img,
  price,
  classifications,
}: ModalProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const closeOnEscapeKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Escape") {
      closeModal();
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
      className="fixed left-0 top-0 right-0 bottom-0 bg-black/50 flex items-center justify-center"
      onClick={closeModal}
      onKeyDown={closeOnEscapeKeyDown}
      role="button"
      tabIndex={-1}>
      {/* нам не нужен получать доступ к этому элементу по index */}
      <div
        className="relative bg-white p-4 rounded-xl flex"
        onClick={e => e.stopPropagation()}
        role="button"
        tabIndex={-1}>
        <img
          alt={name}
          className="w-48 h-48"
          src={img}
        />
        <div className="max-w-lg ml-8">
          <h3 className="font-nunito font-medium text-2xl">{name}</h3>

          <p className="font-nunito text-sm max-w-xs mt-2">
            {arrayToText(ingredients)}
          </p>
          <div className="w-72 h-8 bg-slate-100 rounded-xl flex items-center mt-2">
            <div className="w-24 text-xs font-nunito h-8 bg-white flex items-center justify-center border-slate-100	border-4 rounded-xl">
              Маленькая
            </div>
            <div className="w-24 text-xs font-nunito text-center">Средняя</div>
            <div className="w-24 text-xs font-nunito text-center">Большая</div>
          </div>
          <Button
            className="mt-4"
            onClick={() =>
              dispatch(
                increasePizza({
                  id,
                  name,
                  ingredients,
                  img,
                  price,
                  classifications,
                }),
              )
            }
            type="button">
            Добавить в корзину за {price.default} ₽
          </Button>
          <button
            className="absolute top-2 right-2"
            onClick={closeModal}
            type="button">
            <img
              alt="закрыть"
              className="w-5 h-5"
              src={close}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
