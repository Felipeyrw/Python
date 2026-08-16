import { useState } from "react";
import { useEffect } from "react";
import '../../App.css';
import ProductItem from '../DumbComponent/index.jsx';
import withDataFetching from "../HOCComponent/index.jsx";

const ProductList = ({ data: products }) => {
    return(
        <div>
            <h2>ProductList Component</h2>
            <ul className='list'>
            {products.map((item) => (
                <ProductItem key={item.id} product={item} />
            ))}
            </ul>
        </div>
    )
}

const ProductListWithData = withDataFetching("Products", ProductList, "/smart/products");
export default ProductListWithData;