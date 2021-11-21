import React from "react";
import { Button } from "antd";
import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom"; // v6

import board from "./assets/icon_board.png";
import Nav from "./navbar";

const Class_content = () => {
  const [subjects, setSubject] = useState([
    {
      id: 1,
      name: "829717313 - Toán 11 - Nguyễn Thị A",
    },
    {
      id: 2,
      name: "NH 2021 - 2022 - Quốc phòng và An ninh - Lê Tấn C",
    },
    {
      id: 3,
      name: "NH 2021 - 2022 - Lịch sử 11 - Trần Văn H",
    },
    {
      id: 4,
      name: "NH 2021 - 2022 - Địa lý 11 - Hoàng Ngọc T",
    },
  ]);

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
        {/* ////////////////////////// BÀI GIẢNG ////////////////////////// */}

        <div style={{ width: "100%", float: "left" }}>
          {subjects.map((subject) => (
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
              <Link to="/class">
                <Button
                  size="large"
                  type="link"
                  // onClick={() => alert("You pressed on a subject")}
                  key={subject.id}
                >
                  <span style={{ color: "#1F468B", fontSize: "17px" }}>
                    {subject.name}{" "}
                  </span>
                </Button>
              </Link>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Class_content;
