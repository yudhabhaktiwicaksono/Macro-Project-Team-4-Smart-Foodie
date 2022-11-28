import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Beranda from './component/beranda';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import FlashSaleComp from './component/flashSaleComponent/FlashSaleComp';
import NavComp from './component/RecipeComp/NavbarComp';
import RecipeComp from './component/RecipeComp/RecipeComponent';
import ProductComp from './component/RecipeComp/ProductRecipe/ProductComp';
import OrderPage from './component/orderComponent/OrderPage';
import OrderTab from './component/orderComponent/OrderTab';
import OrderCard from './component/orderComponent/OrderCard,';
import FlashSalePage from './component/flashSaleComponent/FlashSalePage';
import FlashSaleTab from './component/flashSaleComponent/FlashSaleTab';
import FlashSaleTime from './component/flashSaleComponent/FlashSaleTime';
import CategoriesPage from './component/categoriesComponent/CategoriesPage';
import Coba from './coba';
import Apps from './Apps';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Apps/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
