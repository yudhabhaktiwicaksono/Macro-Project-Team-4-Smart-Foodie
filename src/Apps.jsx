import {Routes, Route, Switch} from "react-router-dom";
import Beranda from "./component/beranda";
import CategoriesPage from "./component/categoriesComponent/CategoriesPage";
import FlashSalePage from "./component/flashSaleComponent/FlashSalePage";
import OrderPage from "./component/orderComponent/OrderPage";
import ProductComp from "./component/RecipeComp/ProductRecipe/ProductComp";
import RecipeComp from "./component/RecipeComp/RecipeComponent";


import {HOME,CATEGORY,RECIPE,OrderCard,ViewFlash,PRODUCT, ORDER} from "./router";
function Apps(){
    return(

        <div>
            <Routes>
                <Route element={<Beranda/>} path={HOME}/>
                <Route element={<CategoriesPage/>} path={CATEGORY}/>
                <Route element={<RecipeComp/>} path={RECIPE}/>
                <Route element={<Beranda/>} path={OrderCard}/>
                <Route element={<FlashSalePage/>} path={ViewFlash}/>
                <Route element={<ProductComp/>} path={PRODUCT}/>
                <Route element={<OrderPage/>} path={ORDER}/>

            </Routes>
        </div>


    )

}

export default Apps;