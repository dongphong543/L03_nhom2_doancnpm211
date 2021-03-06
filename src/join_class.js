import React from "react";
import { Button, Input } from "antd";
import "./App.css";
import join from "./assets/icon_plus.png";
import Nav from "./navbar";

const Join_class = () => {
  const [classroom, setClassroom] = React.useState("");
  return (
    <div>
      <Nav pageName="Tham gia lớp học" 
          path={join}
          checkStu={true}/>

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
          onChange={(e) => {
            setClassroom(e.target.value);
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
          onClick={() => {
            if (!classroom) alert("Vui lòng nhập tên lớp học")
            else if (window.confirm("Tham gia lớp thành công. Bạn có muốn trở về trang chủ ?")) {
                document.location = "/shome"
            }
            else window.location.reload();
          }}>
          <b style={{ fontSize: "16px" }}>Tham gia</b>
        </Button>
      </div>
    </div>
  );
};

export default Join_class;
