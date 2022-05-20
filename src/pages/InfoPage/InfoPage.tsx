import { useParams } from "react-router-dom";
import "./InfoPage.css";
import { IProduct } from "../../assets/types";
import { useEffect, useState } from "react";

const InfoPage = () => {
    const [product, setProduct] = useState<IProduct | undefined>();
    const { id } = useParams();

    // const getProduct = () => {
    //     let products: Array<IProduct> | string | null =
    //         localStorage.getItem("products");
    //     if (typeof products === "string") {
    //         products = JSON.parse("products");
    //         if (Array.isArray(products)) {
    //             const product = products.find(
    //                 (product: IProduct) => product.id === Number(id)
    //             );
    //             setProduct(product);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     getProduct();
    // }, []);

    // if (!product) {
    //     return <h3>Error occured. Try again later.</h3>;
    // } else {
    //     return (
    //         <div className="info">
    //             <img
    //                 src={product.imageUrl}
    //                 alt={product.name}
    //                 width={200}
    //                 height={300}
    //             />
    //             <p>Name: {product.name}</p>
    //             <p>Count: {product.count}</p>
    //             <p>Width: {product.size.width}</p>
    //             <p>Height: {product.size.height}</p>
    //             <p>Weight: {product.weight}</p>
    //         </div>
    //     );
    // }
    return null;
};

export default InfoPage;
