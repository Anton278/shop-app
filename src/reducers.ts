import {
    SET_SHOW_ADD_PRODUCT_MODAL,
    SET_PRODUCTS,
    ADD_PRODUCT,
    SORT_BY_ALPHABET,
    SORT_BY_COUNT,
    DELETE_PRODUCT,
} from "./actions";
import { IProduct } from "./assets/types";

interface IDefAppState {
    showAddProductModal: boolean;
}
const defAppState: IDefAppState = {
    showAddProductModal: false,
};
export const appReducer = (state = defAppState, action: any) => {
    switch (action.type) {
        case SET_SHOW_ADD_PRODUCT_MODAL:
            return { ...state, showAddProductModal: action.payload };
        default:
            return state;
    }
};

const getProductsFromLocalStorage = (): Array<IProduct> => {
    let products: Array<IProduct> | string | null =
        localStorage.getItem("products");
    if (typeof products === "string") {
        products = JSON.parse(products);
        if (Array.isArray(products)) {
            return products;
        }
    }
    return [];
};
interface IDefProductsState {
    products: Array<IProduct>;
    sortBy: string;
}
const defProductsState = {
    products: getProductsFromLocalStorage(),
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
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (product: IProduct) => product.id !== action.payload
                ),
            };
        default:
            return state;
    }
};
