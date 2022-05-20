import {
    SET_SHOW_MODAL_VIEW,
    SET_PRODUCTS,
    ADD_PRODUCT,
    SORT_BY_ALPHABET,
    SORT_BY_COUNT,
} from "./actions";
import { IProduct } from "./assets/types";

interface IDefAppState {
    showModalView: boolean;
}
const defAppState: IDefAppState = {
    showModalView: false,
};
export const appReducer = (state = defAppState, action: any) => {
    switch (action.type) {
        case SET_SHOW_MODAL_VIEW:
            return { ...state, showModalView: action.payload };
        default:
            return state;
    }
};

interface IDefProductsState {
    products: Array<IProduct>;
    sortBy: string;
}
const defProductsState = {
    products: [],
    sortBy: "Alphabet",
};
export const productsReducer = (
    state: IDefProductsState = defProductsState,
    action: any
) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case ADD_PRODUCT:
            return { ...state, products: [...state.products, action.payload] };
        case SORT_BY_ALPHABET:
            return {
                sortBy: "Alphabet",
                products: state.products
                    .slice()
                    .sort((product1: IProduct, product2: IProduct) => {
                        if (product1.name < product2.name) {
                            return -1;
                        }
                        if (product1.name > product2.name) {
                            return 1;
                        }
                        return 1;
                    }),
            };
        case SORT_BY_COUNT:
            return {
                sortBy: "Count",
                products: state.products
                    .slice()
                    .sort(
                        (product1: IProduct, product2: IProduct) =>
                            product1.count - product2.count
                    ),
            };
        default:
            return state;
    }
};
