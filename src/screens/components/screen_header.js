import React from "react";
import "./screen_header.css";
import "antd/dist/antd.css";
import NavBar from '../../navbar';

function ScreenHeader(props) {
  return (
    <div className="header">
      <NavBar />
      <h1 id="title">{props.name}</h1>
    </div>
  );
}

export default ScreenHeader;
