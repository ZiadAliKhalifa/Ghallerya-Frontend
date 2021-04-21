import React from "react";
import "./Megatron.css";

import Belal from "./../../../static/images/Homepage/Belal.png";
import Search from "./Search/Search";

function Megatron() {
  return (
    <div className="megatron" data-testid="megatron">
      <img src={Belal} alt="An old guy smilling" />
      <span>Find the perfect image</span>
      <h4>The largest middle eastern oriented stock gallery</h4>
      <Search />
    </div>
  );
}

export default Megatron;
