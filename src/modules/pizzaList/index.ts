//inside imports
import pizzaReducer from "./store/reducer";

//outside imports
import { increasePizza, deletePizzaFromCart } from "@modules/cart";

//inside exports
export { increasePizza, deletePizzaFromCart };

//exports to another modules
export { pizzaReducer };
export type { Pizza } from "./store/interfaces";
