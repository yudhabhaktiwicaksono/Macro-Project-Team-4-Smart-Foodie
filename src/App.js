import "./App.css";
import Cheader from "./components/header/Header";
import Cjumbotron from "./components/jumbotron/Jumbotron";
import Cfooter from "./components/footer/Footer";

import React from "react";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="content px-5">
          <Cheader />
          <Cjumbotron />
        </div>
      </header>
      <Cfooter />
    </div>
  );
}

export default App;
