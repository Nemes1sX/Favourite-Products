/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

import './bootstrap';
import  '../css/app.css';
import { createRoot } from "react-dom/client";
import  { BrowserRouter, Router} from 'react-router-dom';
import Index from "./components";
import React from 'react'


//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const baseUrl = window.location.href;
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter basename={"/"}>
    <Index/>
  </BrowserRouter>
);

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

