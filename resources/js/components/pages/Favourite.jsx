import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function Favourite() {
    const [favouriteProducts, setFavouriteProducts] = useState([]);

    useEffect(() => {
        fetchFavouriteProducts();
    }, []);

    function fetchFavouriteProducts() {
        console.log('Fetch products');
        axios.get('http://localhost:8000/api/favourite/index?user_id=10')
            .then(response => response.data)
            .then(data => {
                    console.log(data[0]);
                    setFavouriteProducts(data);
                    console.log(favouriteProducts);
                }
            );
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Favourite products</h1>
                    {
                        favouriteProducts.length > 0 &&
                        favouriteProducts.map((product, key) =>
                            <div className="col-lg-4 col-md-6 mb-4" key={key}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            <a href="#">{product.name}</a>
                                        </h4>
                                        <h5>$ {product.price}</h5>
                                        <p className="card-text">{product.description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    {favouriteProducts.length === 0 && <h2 className="text-center">No products</h2>}
                </div>
            </div>
        </>
    );
}
