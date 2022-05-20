import { useRef, useState } from "react";
import "./AddProductModal.css";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT, SET_SHOW_MODAL_VIEW } from "../../actions";
import { IProduct } from "../../assets/types";

const AddProductModal = () => {
    const [imgURL, setImgURL] = useState("");
    const [nameValue, setNameValue] = useState("");
    const [countValue, setCountValue] = useState("");
    const [widthtValue, setWidthValue] = useState("");
    const [heightValue, setHeightValue] = useState("");
    const [weightValue, setWeightValue] = useState("");
    const errorMessageRef = useRef<any>();

    const dispatch = useDispatch();

    const getID = (): number => {
        let products: Array<IProduct> | string | null =
            localStorage.getItem("products");
        if (typeof products === "string") {
            products = JSON.parse(products);
            if (Array.isArray(products)) {
                return products.length + 1;
            }
            return Date.now();
        } else {
            return Date.now();
        }
    };

    const addProductToList = () => {
        if (
            !imgURL.trim().length ||
            !nameValue.trim().length ||
            !countValue.trim().length ||
            !widthtValue.trim().length ||
            !heightValue.trim().length ||
            !weightValue.trim().length
        ) {
            return (errorMessageRef.current.innerText = "Fill all the fields.");
        } else {
            errorMessageRef.current.innerText = "";
            dispatch({
                type: ADD_PRODUCT,
                payload: {
                    id: getID(),
                    imageUrl: imgURL,
                    name: nameValue,
                    count: countValue,
                    size: {
                        width: widthtValue,
                        height: heightValue,
                    },
                    weight: weightValue,
                },
            });
            dispatch({ type: SET_SHOW_MODAL_VIEW, payload: false });
        }
    };

    return (
        <div className="modal">
            <p className="error-message" ref={errorMessageRef}></p>
            <ul className="options-list">
                <li>
                    Choose image:{" "}
                    <select onChange={(e: any) => setImgURL(e.target.value)}>
                        <option value=""></option>
                        <option value="/img/cat-1.png">1</option>
                        <option value="/img/cat-2.png">2</option>
                        <option value="/img/cat-3.png">3</option>
                        <option value="/img/cat-4.png">4</option>
                    </select>
                </li>
                <li>
                    Name:{" "}
                    <input
                        type="text"
                        value={nameValue}
                        onChange={(e: any) => setNameValue(e.target.value)}
                    />
                </li>
                <li>
                    Count:{" "}
                    <input
                        type="text"
                        value={countValue}
                        onChange={(e: any) => setCountValue(e.target.value)}
                    />
                </li>
                <li>
                    Size:{" "}
                    <ul className="sub-options-list">
                        <li>
                            Width:{" "}
                            <input
                                type="text"
                                value={widthtValue}
                                onChange={(e: any) =>
                                    setWidthValue(e.target.value)
                                }
                            />
                        </li>
                        <li>
                            Height:{" "}
                            <input
                                type="text"
                                value={heightValue}
                                onChange={(e: any) =>
                                    setHeightValue(e.target.value)
                                }
                            />
                        </li>
                    </ul>
                </li>
                <li>
                    Weight:{" "}
                    <input
                        type="text"
                        value={weightValue}
                        onChange={(e: any) => setWeightValue(e.target.value)}
                    />
                </li>
            </ul>
            <div className="modal__footer">
                <button
                    type="button"
                    className="custom-success-btn"
                    onClick={addProductToList}
                >
                    Confirm
                </button>
                <button
                    type="button"
                    className="custom-danger-btn"
                    onClick={() =>
                        dispatch({ type: SET_SHOW_MODAL_VIEW, payload: false })
                    }
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default AddProductModal;
