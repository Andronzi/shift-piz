// inside imports
import { deletePizzaFromCart, increasePizza } from "@modules/cart";
import pizzaReducer from "./store/pizzaReducer";

// inside and outside
import modalReducer, { changeShow } from "./store/modalReducer";

// outside imports
import Modal from "./components/Modal/Modal";
import PizzasList from "./components/pizzaList";

// inside exports
export type { Pizza } from "./store/interfaces";
export { increasePizza, deletePizzaFromCart };
// exports to another modules
export { pizzaReducer, modalReducer, Modal, changeShow, PizzasList };

