import instance from "@src/axiosConfig";
import { IClassificationType, Pizza } from "../store/interfaces";

export const getPizzas = (classifications?: keyof IClassificationType) =>
  instance.get<Pizza[]>("/pizza", { params: { classifications } });
