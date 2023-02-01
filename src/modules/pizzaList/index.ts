//inside imports
import pizzaReducer from "./store/pizzaReducer";
import modalReducer from "./store/modalReducer";


//outside imports
import { increasePizza, deletePizzaFromCart } from "@modules/cart";
import { changeShow } from "./store/modalReducer";
import Modal from "./components/Modal/Modal";
import PizzasList from "./components/pizzaList";

//inside exports
export { increasePizza, deletePizzaFromCart };

//exports to another modules
export { pizzaReducer, modalReducer, Modal, changeShow, PizzasList };
export type { Pizza } from "./store/interfaces";
