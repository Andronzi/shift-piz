import React from "react";
import { changeShow } from "@modules/pizzaList";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { RootState } from "@store/store";

const Modal = () => {
  const dispatch = useAppDispatch();
  const { isShow } = useAppSelector((state: RootState) => state.modal);

  const closeOnEscapeKeyDownRef = React.useRef();

  //@ts-ignore
  closeOnEscapeKeyDownRef.current = React.useCallback(
    (e: KeyboardEvent) => {
      if ((e.charCode || e.keyCode) === 27) {
        dispatch(changeShow(false));
      }
    },
    [dispatch],
  );

  React.useEffect(() => {
    //@ts-ignore
    document.body.addEventListener("keydown", closeOnEscapeKeyDownRef.current);
    return () => {
      //run after unmount
      document.body.removeEventListener(
        "keydown",
        //@ts-ignore
        closeOnEscapeKeyDownRef.current,
      );
    };
  }, [closeOnEscapeKeyDownRef.current]);

  if (!isShow) {
    return null;
  }

  //Перенесу большую чась в компонент ModalContent
  return (
    <div
      onClick={() => dispatch(changeShow(false))}
      className="fixed left-0 top-0 right-0 bottom-0 bg-black/50 flex items-center justify-center">
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white p-4 rounded">
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
