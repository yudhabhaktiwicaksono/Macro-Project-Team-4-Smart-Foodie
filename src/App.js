import Jumbotron from "./components/jumbotron/Jumbotron";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/signup/SignUp";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { SIGN_IN, SIGN_UP, CATEGORY } from "../src/router";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path={CATEGORY} element={<Jumbotron />} />
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={SIGN_UP} element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
