import "./MainPage.css";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../../assets/types";
import { useEffect } from "react";
import {
    SORT_BY_ALPHABET,
    SORT_BY_COUNT,
    SET_SHOW_ADD_PRODUCT_MODAL,
} from "../../actions";
import Card from "../../components/Card";
import AddProductModal from "../../components/AddProductModal";

const MainPage = () => {
    const dispatch = useDispatch();
    const showAddProductModal: boolean = useSelector(
        (state: any) => state.appReducer.showAddProductModal
    );
    const products: Array<IProduct> = useSelector(
        (state: any) => state.productsReducer.products
    );

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

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
                        dispatch({
                            type: SET_SHOW_ADD_PRODUCT_MODAL,
                            payload: true,
                        })
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
                        id={product.id}
                    />
                ))}
            </main>
            {showAddProductModal && <AddProductModal />}
        </>
    );
};

export default MainPage;
