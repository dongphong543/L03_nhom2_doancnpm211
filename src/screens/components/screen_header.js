import React from "react";
import "./screen_header.css";
import { CaretDownFilled } from "@ant-design/icons";
import logo from "../../assets/S_letter.png";
import { BellFilled } from "@ant-design/icons";
import { Button } from "antd";
import Nav from "../../navbar";
import "antd/dist/antd.css";

function ScreenHeader(props) {
  let name = "Nguyễn Minh Nghĩa";
  var week = "Tuần 39";
  var weekday = "thứ 6";
  var day = "1/10/2021";

  return (
    <div className="header">
      {/* <div className="navbar">
        <div className="navbar-item logo">
          <img src={logo} alt="logo" height="40px" />
        </div>
        <div className="navbar-item time">
          <div className="date-time">
            <div className="cutter-t"></div>
            <div className="date">
              <span id="week">{week + ", "}</span>
              <span>{weekday + ", "}</span>
              <span>{day}</span>
            </div>
          </div>
          <div id="noti">
            <Button type="text">
              <BellFilled id="bellfilled" />
            </Button>
            <div id="cutter"></div>
          </div>
        </div>
        <div className="navbar-item name">
          <div className="message">
            <p id="hello"> {"Xin chào, "}</p>
            <p id="user">{name}</p>
            <Button type="text">
              <CaretDownFilled id="caretdown" />
            </Button>
          </div>
        </div>
      </div> */}
      <Nav />

      <div
        id="title"
        style={{
          marginTop: "25px",
          // marginLeft: "150px",
          marginBottom: "25px",
          fontSize: "48px",
          fontWeight: "bold",
          color: "#222",
        }}
      >
        {props.name}
      </div>
    </div>
  );
}

export default ScreenHeader;
