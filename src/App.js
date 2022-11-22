import Jumbotron from "./components/jumbotron/Jumbotron";
import SignIn from "./components/SignIn/SignIn";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { SIGN_IN, CATEGORY } from "../src/router";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path={CATEGORY} element={<Jumbotron />} />
        <Route path={SIGN_IN} element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
