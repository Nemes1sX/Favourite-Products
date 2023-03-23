import React, {useEffect, useState} from 'react';
import axios from "axios";
import AuthService from "../../services/AuthService";
import AuthHeader from "../../services/auth-header";

export default function Products() {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [token, setToken] = useState(AuthService.getToken())
    const [products, setProducts] = useState([]);
    const url = window.location.href;

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts() {
        axios.get(url + 'api/index')
            .then(response => {
                    const fetchedProducts = response.data.data;
                    setProducts(fetchedProducts);
                }
            );
    }

    function addToFavourites(productId) {
        axios.post(url + 'api/favourite', {
            product_id: productId
        }, {
            headers: AuthHeader()
        })
            .then(response => response.data.message)
            .then(message => {
                setError();
                setSuccess(message);
            }
            )
            .catch(error => {
                if (error.response.status === 400) {
                   setError(response.data.error)
                }
            });
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="text-center">Products list</h1>
                    {success &&
                        <div className="alert alert-success" role="alert">
                            {success}
                        </div>
                    }
                    {error &&
                        <div className="alert alert-danger" role="alert">
                            {error}
                        </div>
                    }
                    {
                        products.length > 0 &&
                        products.map((product, key) =>
                            <div className="col-lg-4 col-md-6 mb-4" key={key}>
                                <div className="card h-100">
                                    <div className="card-body">
                                        <h4 className="card-title">
                                            {product.name}
                                        </h4>
                                        <p className="card-text">{product.description}</p>
                                        <h5>$ {product.price}</h5>
                                        {token && <div className="btn-group">
                                            <button type="submit" className="btn btn-danger"
                                                    onClick={() => addToFavourites(product.id)}>Add <i className="fa fa-heart"></i></button>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        )}
                    {products.length === 0 && <h2 className="text-center">No products</h2>}
                </div>
            </div>
        </>
    );
}
