import React from "react";
import { Button, Input } from "antd";
import "./App.css";
import join from "./assets/icon_plus.png";
import Nav from "./navbar";
import { Link } from "react-router-dom";

const join_class = () => {
  return (
    <div>
      <Nav pageName="Tham gia lớp học" path={join}/>

      <div
        style={{
          marginTop: "10vh",
          verticalAlign: "middle",
          textAlign: "center",
          lineHeight: "30px",
        }}
      >
        <span style={{ color: "#1F468B", fontSize: "17px" }}>
          Nhập mã lớp học
        </span>
        <b style={{ color: "#F01836", fontSize: "17px" }}>*</b>
        <br />
        <Input
          size="large"
          placeholder="Mã lớp học"
          allowClear="true"
          style={{
            width: "40vw",
            height: "50px",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
        <br />
        <span style={{ color: "#1F468B", fontSize: "17px" }}>
          Nhập mật khẩu lớp học
        </span>
        <br />
        <Input.Password
          size="large"
          placeholder="Mật khẩu"
          style={{
            height: "50px",
            width: "40vw",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
        <br />
        <Link to="/classroom">
        <Button
          style={{
            borderRadius: "8px",
            backgroundColor: "#1F468B",
            borderColor: "#1F468B",
            height: "40px",
            marginTop: "20px",
          }}
          size="large"
          type="primary"
          onClick={() => alert("Tham gia lớp thành công")}
        >
          <b style={{ fontSize: "16px" }}>Tham gia</b>
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default join_class;
