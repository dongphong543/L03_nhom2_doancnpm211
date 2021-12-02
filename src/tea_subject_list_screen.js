import React from "react";
import { Button } from "antd";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom"; // v6

import board from "./assets/icon_board.png";
import Nav from "./navbar";

const Subject = (props) => {
  return (
    <div style={{ width: "100%", float: "left" }}>
            <h3
              style={{
                // borderRadius: "8px",
                background: "White",
                margin: "5px",
                padding: "2px 15px",
                cursor: "pointer",
                width: "80vw",
                textAlign: "left",

                borderRadius: "8px",
                marginLeft: "auto",
                marginRight: "auto",
                boxShadow: "0px 0px 7px 1px rgba(210, 210, 210, 0.6)",
                marginBottom: "15px",
              }}
            >
              <Link to={props.link}>
                <Button
                  size="large"
                  type="link"
                >
                  <span style={{ color: "#1F468B", fontSize: "17px" }}>
                    {props.name}{" "}
                  </span>
                </Button>
              </Link>
            </h3>
        </div>
  )
}

const Class_content = () => {
  return (
    <div>
      <Nav pageName="Lớp học" 
          path={board} 
          checkStu={false} />
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "80vw",
          flexWrap: "wrap",
          marginTop: "3vh",
        }}
      >
      <Subject name="NH 2021 - 2022 - Toán 12 - Nguyễn Văn A - Lớp 12A1"
              link="/teachersubject/12A1" />
      <Subject name="NH 2021 - 2022 - Toán 12 - Nguyễn Văn A - Lớp 12A3"
              link="/teachersubject/12A3" />
      <Subject name="NH 2021 - 2022 - Toán 12 - Nguyễn Văn A - Lớp 12A7"
              link="/teachersubject/12A7" />
        
      </div>
    </div>
  );
};

export default Class_content;
