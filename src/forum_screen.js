import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import "./App.css";
import { formatCountdown } from "antd/lib/statistic/utils";

var myCurrentDate = new Date();

const Forum = () => (
  <div
    style={{
      overflowX: "hidden",
      position: "relative",
    }}
  >
    <img
      src={logo}
      alt="Logo"
      style={{
        marginTop: "29px",
        marginLeft: "50px",
        height: "38px",
        position: "absolute",
      }}
    />
    <div
      style={{
        marginTop: "30px",
        marginLeft: "150px",
        marginRight: "-1693px",
        height: "38px",
        position: "absolute",
      }}
    >
      <span
        style={{
          color: "white",
          position: "absolute",
          marginLeft: "25px",
          marginTop: "6px",
        }}
      >
        {" "}
        Ngày <b> {myCurrentDate.getDate()} </b> tháng
        <b> {myCurrentDate.getMonth()} </b>
        năm <b> {myCurrentDate.getFullYear()} </b>
      </span>
      <img
        src={bluebar}
        alt="blue bar"
        style={{
          height: "38px",
        }}
      />
    </div>
    <div
      style={{
        position: "relative",
        marginTop: "29px",
      }}
    >
      <span
        className="photo2"
        style={{
          marginLeft: "25px",
          marginTop: "8px",
          position: "fixed",
          color: "white",
          marginLeft: "-1150px",
        }}
      >
        {" "}
        Xin chào, <b> Chung Đông Phong </b>
      </span>

      <img
        className="photo2"
        src={redbar}
        alt="blue bar"
        style={{
          height: "39px",
          marginLeft: "-1180px",
        }}
      />
    </div>
    <div
      style={{
        marginTop: "25px",
        marginLeft: "150px",
        marginBottom: "25px",
        fontSize: "48px",
        fontWeight: "bold",
        color: "#222",
      }}
    >
      Diễn đàn
    </div>

    <div style={{ backgroundColor: "red" }}> Hello</div>
  </div>
);

export default Forum;
