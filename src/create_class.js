import React from "react";
import { Button, Input } from "antd";
import "./App.css";
import join from "./assets/icon_plus.png";
import Nav from "./navbar";
const Create_class = () => {
  const [classId, setClassId] = React.useState(Math.floor(Math.random() * 100000000) + 1);
  const [classroom, setClassroom] = React.useState("");
  return (
    <div>
      <Nav pageName="Tạo lớp học"  
          path={join} checkStu='false'
          checkStu={false}/>

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
          {classId}
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
          onChange={(e) => {
            setClassroom(e.target.value);
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
          onClick={() => {
            if (!classroom) alert("Vui lòng nhập tên lớp học")
            else if (window.confirm("Tạo lớp thành công. Bạn có muốn trở về trang chủ ?")) {
                document.location = "/home"
            }
            else window.location.reload();
          }}
         >
          <b style={{ fontSize: "16px" }}>Mở lớp</b>
        </Button>
      </div>
    </div>
  );
};

export default Create_class;
