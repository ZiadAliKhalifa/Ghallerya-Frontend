import React from 'react'
import './Megatron.css';

import Belal from "./../../../static/images/Belal.png"
import Search from './Search/Search';

function Megatron() {
    return (
        <div className="megatron">
            <img src={Belal} alt="An old guy smilling" />
            <h1>Find the perfect image</h1>
            <h4>The largest middle eastern oriented stock gallery</h4>
            <Search />
        </div>
    )
}

export default Megatron
