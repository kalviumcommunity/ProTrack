import React from "react";
import "./Style/fill_data.css";
import Filldata_Box from "../Components/Filldata_Box";

function FillData(props) {
  return (
    <div className="filldata_parent_div">
      <div className="filldata_side_div_left">
        <button> Cluster </button>
        <br />
        <br />
        <button> Packing </button>
      </div>
      <div className="filldata_side_div"> </div>
      <div className="filldata_vertical_line"></div>

      <div className="filldata_main_div">
        <Filldata_Box />
        <Filldata_Box />
        <Filldata_Box />
      </div>

      <div className="filldata_vertical_line"></div>

      <div className="filldata_side_div_right">
        <h3>Total Entries </h3>
        <br />
        <button>06</button>
      </div>

      <div className="filldata_side_div"> </div>
    </div>
  );
}

export default FillData;
