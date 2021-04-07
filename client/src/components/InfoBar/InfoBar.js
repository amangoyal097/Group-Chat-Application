import React from "react";
import closeIcon from "../../Icons/closeIcon.png";
import onlineIcon from "../../Icons/onlineIcon.png";

import "./InfoBar.css";

const InfoBar = (props) => {
  return (
    <div className='infoBar'>
      <div className='leftInnerContainer'>
        <img className='onlineIcon' src={onlineIcon} alt='onlineImg' />
        <h3>{props.room}</h3>
      </div>
      <div className='rightInnerContainer'>
        <a href='/'>
          <img src={closeIcon} alt='closeImg' />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
