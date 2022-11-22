import React from "react";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";

const Kategory = () => {
  return (
    <div>
      <div className="header__jumbotron_kiri">
        <h5> All Category</h5>
        <hr></hr>
        <h6> All Category</h6>
        <h5> Filter</h5>
        <hr></hr>
        <h6> Lokasi</h6>
        <hr></hr>
        <h6>
          Rating <br />
          <img className="mt-4 star3" src={s5} />
          <img className="mt-4 star3" src={s4} />
          <img className="mt-4 star3" src={s3} />
          <img className="mt-4 star3" src={s2} />
          <img className="mt-4 star3" src={s1} />
        </h6>
        <hr></hr>
        <h6>
          <b> Price Range</b>
        </h6>
        <div className="row">
          <div className="col">
            <a className="btn btn-outline-dark pr-4">Rp 1000</a>
          </div>
          <div className="col">
            <a className="btn btn-outline-dark">Rp Max</a>
          </div>
        </div>
        <br />
        <div className="aplly__filter">
          <a className="btn tombol__orange" style={{ width: "100%" }}>
            Apply Filter
          </a>
        </div>
      </div>
    </div>
  );
};

export default Kategory;
