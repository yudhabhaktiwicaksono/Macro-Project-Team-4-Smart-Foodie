import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import Beranda from "./component/beranda";
import RecipeComp from "./component/RecipeComp/RecipeComponent";

const Coba = () =>{
    return (

        <>
        
       <div>
        <h1>coba</h1>
        <Routes>
            <Route path="/recipe" element={<RecipeComp/>}/>
        </Routes>
        </div>
        </>



    )
}

export default Coba;