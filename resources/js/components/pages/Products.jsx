import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function Products() {
    const [products, setProducts] = useState([]);
    const url = window.location.href;

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts()
    {
        axios.get(url + 'api/index')
            .then(response => {
                const fetchedProducts = response.data.data;
                setProducts(fetchedProducts);
            }
        );
    }

    return (
        <>
        <div className="container">
            <div className="row">
                <h1 className="text-center">Products list</h1>
                {
                    products.length > 0 &&
                    products.map((product, key) =>
                            <div className="col-lg-4 col-md-6 mb-4" key={key}>
                        <div className="card h-100">
                            <div className="card-body">
                                <h4 className="card-title">
                                    {product.name}
                                </h4>
                                <h5>$ {product.price}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                        </div>
                        )}
                { products.length === 0 && <h2 className="text-center">No products</h2>}
            </div>
        </div>
        </>
    );
}
