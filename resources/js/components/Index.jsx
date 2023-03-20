import React, {Fragment} from 'react';
import Layout  from './Layout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Products from "./pages/Products";
import Favourite from "./pages/Favourite";
import Login from "./pages/Login";

export default function Index() {

    return (
       <Layout>
        <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/login" element={<Login />} />
        </Routes>
       </Layout>
    );
}
