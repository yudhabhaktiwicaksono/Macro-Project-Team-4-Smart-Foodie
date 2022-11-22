import React from "react";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import logo from "../../assets/logo-filter.png";
import "./kategori.css";
const Kategory = () => {
  return (
    <div>
      <div className="header__jumbotron_kiri">
        <h5 className="pb-3">
          <img src={logo} alt="" className="pe-2" />
          <b>Filter</b>
        </h5>
        <h5>
          <b>Categories</b>
        </h5>
        <hr />
        <ul>
          <li>Fruit</li>
          <li>Vegetables</li>
          <li>Herbs & Spices</li>
          <li>Dairy Products</li>
          <li>Eggs</li>
          <li>fresh Meat</li>
          <li>fresh Seafood</li>
          <li>Vegetables Oil</li>
          <li>Nuts</li>
        </ul>
        <h5>
          <b>Location</b>
        </h5>
        <hr />
        <ul>
          <li>Jabodetabek</li>
          <li>Jawa Barat</li>
          <li>Jawa Timur</li>
          <li>Jawa Tengah</li>
          <li>Sumatera Selatan</li>
          <li>Sumatera Barat</li>
        </ul>
        <h5>
          <b>Rating</b> <br /> <hr />
          <img className="mt-4 star3" src={s5} />
          <img className="mt-4 star3" src={s4} />
          <img className="mt-4 star3" src={s3} />
          <img className="mt-4 star3" src={s2} />
          <img className="mt-4 star3" src={s1} />
        </h5>
        <h5 className="pt-3">
          <b> Price</b> <hr />
        </h5>
        <div className="row">
          <div class="slidecontainer">
            <input type="range" min="1" max="100" value="50" />
          </div>
        </div>
        <br />
        <div className="aplly__filter">
          <a className="btn tombol__orange" style={{ width: "100%" }}>
            Filter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kategory;
