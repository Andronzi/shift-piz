import { changeShow } from "@modules/pizzaList";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { RootState } from "@store/store";
import React from "react";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { isShow } = useAppSelector((state: RootState) => state.modal);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    ref.current?.focus();
  }, [isShow]);

  if (!isShow) {
    return null;
  }

  // Перенесу большую чась в компонент ModalContent
  return (
    <div
      ref={ref}
      className="fixed left-0 top-0 right-0 bottom-0 bg-black/5 flex items-center justify-center"
      onClick={() => dispatch(changeShow(false))}
      onKeyDown={closeOnEscapeKeyDown}
      tabIndex={0}>
      <div
        className="bg-white p-4 rounded"
        onClick={e => e.stopPropagation()}>
        <h3>Modal title</h3>

        <div className="modal-body">This is modal content</div>
        <div className="modal-footer">
          <button onClick={() => dispatch(changeShow(false))}>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
