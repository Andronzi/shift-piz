import { MetaStateData } from "@src/store/interfaces";

type Sizes = {
    small: number;
    medium: number;
    large: number;
}

type Crusts = { 
    cheesy: number; 
    cheesySausage: number 
};

type Classifications = {
    new: boolean,
    spicy: boolean, 
    vegetarian: boolean
};

type ReadOnlySettings<T>  = {
    readonly [K in keyof T]: T[K];
}

type PriceObject = {
    default: number;
    size: ReadOnlySettings<Sizes>;
    crust: ReadOnlySettings<Crusts>;
}

type Pizza = {
    id: number;
    name: string;
    ingredients: string[];
    img: string;
    price: PriceObject;
    classifications: ReadOnlySettings<Classifications>;
}

type PizzasState = {
    pizzas: Pizza[];
} & MetaStateData;

type ModalState = {
    isShow: boolean;
}

export { Pizza, PizzasState, ModalState }