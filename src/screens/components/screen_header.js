import React from "react";
import "./screen_header.css";
import "antd/dist/antd.css";
import NavBar from "../../navbar";

function ScreenHeader(props) {
  return (
    <div className="header">
      <NavBar />
      <b id="title">{props.name}</b>
    </div>
  );
}

export default ScreenHeader;
