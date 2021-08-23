import React from 'react'
import music from "../images/icon-music.svg";

function Annual() {
    return (
        <div className="annual">
            <h3 className="annual1">Annual Plan</h3> 
            <p className="annual2">$59.99/year</p>
            <span className="span">Change</span>
            <img  className="image" src={music} alt="music-icon" />
      
        </div>
    )
}

export default Annual
