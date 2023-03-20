import React, {Fragment} from 'react';
import Layout  from './Layout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from "./pages/Products";
import Favourite from "./pages/Favourite";

export default function Index() {

    return (
       <Layout>
        <Fragment>
            <Routes>
                <Route path="/" exact element={<Products />}>
                    <Route path="products" element={<Products />}>
                        <Route path="favourite" element={<Favourite />} />
                    </Route>
                </Route>
            </Routes>
        </Fragment>
       </Layout>
    );
}
