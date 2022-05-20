import "./App.css";
import "./assets/common.css";
import ModalView from "./components/ModalView";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import {
    SET_PRODUCTS,
    SET_SHOW_MODAL_VIEW,
    SORT_BY_ALPHABET,
    SORT_BY_COUNT,
} from "./actions";
import { useEffect } from "react";
import { IProduct } from "./assets/types";

const App = () => {
    const getProductsFromLocalStorage = () => {
        let products: Array<IProduct> | string | null =
            localStorage.getItem("products");
        if (typeof products === "string") {
            products = JSON.parse(products);
            if (Array.isArray(products)) {
                dispatch({ type: SET_PRODUCTS, payload: products });
            }
        } else {
            localStorage.setItem("products", JSON.stringify([]));
        }
    };

    const dispatch = useDispatch();
    const showModalView: boolean = useSelector(
        (state: any) => state.appReducer.showModalView
    );
    const products: Array<IProduct> = useSelector(
        (state: any) => state.productsReducer.products
    );

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        getProductsFromLocalStorage();
    }, []);

    return (
        <>
            <header>
                <h1 className="header__title">Shop-app</h1>
                <div className="select-wrapp">
                    Sort by:{" "}
                    <select
                        onChange={(e: any) => {
                            e.target.value === "Alphabet"
                                ? dispatch({ type: SORT_BY_ALPHABET })
                                : dispatch({ type: SORT_BY_COUNT });
                        }}
                    >
                        <option value="Alphabet">Alphabet</option>
                        <option value="Count">Count</option>
                    </select>
                </div>
                <button
                    type="button"
                    className="header__add-btn custom-success-btn"
                    onClick={() =>
                        dispatch({ type: SET_SHOW_MODAL_VIEW, payload: true })
                    }
                >
                    Add product
                </button>
            </header>
            <div className="hr"></div>
            <main>
                {products.map((product: IProduct) => (
                    <Card
                        imageUrl={product.imageUrl}
                        name={product.name}
                        key={product.id}
                    />
                ))}
            </main>
            {showModalView && <ModalView />}
        </>
    );
};

export default App;
