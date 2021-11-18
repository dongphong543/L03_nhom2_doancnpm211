import React from "react";
import { Button, Input } from "antd";
import "./App.css";
import join from "./assets/icon_plus.png";
import Nav from "./navbar";

const join_class = () => {
  return (
    <div>
      <Nav pageName="Tham gia lớp học"
           path={join}/>
      {/* <div
        style={{
          marginLeft: "10vw",
          marginTop: "7vh",
        }}
      >
        <b style={{ fontSize: "40px" }}>Tạo lớp học</b>
      </div>
      <img
        src={join}
        style={{
          marginLeft: "70vw",
          marginTop: "-200px",
          height: "210px",
        }}
      />
      <hr
        style={{
          backgroundColor: "#eee",
          height: 0.05,
          width: "auto",
          borderColor: "transparent",
          boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
        }}
      /> */}

      <div
        style={{
          marginTop: "10vh",
          verticalAlign: "middle",
          textAlign: "center",
          lineHeight: "30px",
        }}
      >
        <span style={{ color: "#1F468B", fontSize: "17px" }}>
          Mã lớp học 
        </span> <br />
        <span style={{ color: "#1F468B", fontSize: "35px" }}>
          12112021
        </span>
        <br /> <br />
        <span style={{ color: "#1F468B", fontSize: "17px" }}>
          Tên lớp học
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
          Mật khẩu lớp học
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
        <Button
          style={{
            borderRadius: "8px",
            backgroundColor: "#1F468B",
            borderColor: "#1F468B",
            height: "40px",
            marginTop: "20px",
            marginBottom: "10vh"
          }}
          size="large"
          type="primary"
          onClick={() => alert("You pressed")}
        >
          <b style={{ fontSize: "16px" }}>Mở lớp</b>
        </Button>
      </div>
    </div>
  );
};

export default join_class;
