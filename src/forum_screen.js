import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import "./App.css";
import { formatCountdown } from "antd/lib/statistic/utils";

const Forum = () => (
  <div style={{ overflowX: "hidden" }}>
    <img
      src={logo}
      alt="Logo"
      style={{
        marginTop: "30px",
        marginLeft: "50px",
        height: "40px",
      }}
    />

    <img
      src={bluebar}
      alt="blue bar"
      style={{
        marginTop: "30px",
        marginRight: "-1693px",
        height: "38px",
      }}
    />

    <img
      className="photo2"
      src={redbar}
      alt="blue bar"
      style={{
        marginTop: "30px",
        marginLeft: "-1000px",
        height: "40px",
      }}
    />
  </div>
);

export default Forum;
