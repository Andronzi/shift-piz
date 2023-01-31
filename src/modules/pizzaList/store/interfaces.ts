import { MetaStateData } from "@src/store/interfaces";

type sizes = {
    small: number;
    medium: number;
    large: number;
}

type crusts = { 
    cheesy: number; 
    cheesySausage: number 
};

type classifications = {
    new: boolean,
    spicy: boolean, 
    vegetarian: boolean
};

type ReadOnlySettings<T>  = {
    readonly [K in keyof T]: T[K];
}

type priceObject = {
    default: number;
    size: ReadOnlySettings<sizes>;
    crust: ReadOnlySettings<crusts>;
}

type Pizza = {
    id: number;
    name: string;
    ingredients: string[];
    img: string;
    price: priceObject;
    classifications: ReadOnlySettings<classifications>;
}

type PizzasState = {
    pizzas: Pizza[];
} & MetaStateData;

export { Pizza, PizzasState };