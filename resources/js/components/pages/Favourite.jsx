import React, {useEffect, useState} from 'react';
import AuthHeader from "../../services/auth-header";
import axios from "axios";
import AuthService from "../../services/AuthService";
import { useNavigate } from 'react-router-dom'

export default function Favourite() {
    const navigate = useNavigate();
    const [favouriteProducts, setFavouriteProducts] = useState([]);
    const [token, setToken] = useState(AuthService.getToken());

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
        fetchFavouriteProducts();
    }, []);

    function fetchFavouriteProducts() {
        axios.get('http://localhost:8000/api/favourite', {
            headers: AuthHeader()
        })
            .then(response => response.data.data)
            .then(data => {
                    setFavouriteProducts(data);
                    console.log(data);
                }
            );
    }

    function removeFromFavourite(id) {
        axios.delete('http://localhost:8000/api/favourite/' + id, {
            headers: AuthHeader()
        })
            .then(response => response.data.message)
            .then(() => {
               fetchFavouriteProducts();
            });
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
                                        <div className="btn-group">
                                            <button className="btn btn-danger" onClick={() => removeFromFavourite(product.favourite[0].id)}>
                                                Remove <i className="fa fa-heart"></i>
                                            </button>
                                        </div>
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
