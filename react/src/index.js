import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

import Navbar from './components/navbar';

import 'bootstrap/dist/css/bootstrap.css';
import '../src/css/style.css';



ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
