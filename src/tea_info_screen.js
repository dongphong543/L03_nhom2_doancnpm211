import React, { useState } from "react";
import icon_male from "./assets/icon_male.png";
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import {
  BellFilled,
  CaretDownOutlined,
  LeftCircleFilled,
  EyeInvisibleOutlined, EyeTwoTone
} from "@ant-design/icons";
import "./App.css";
import {
  Row,
  Col,
  Badge,
  Button,
  Layout,
  Menu,
  Dropdown,
  message,
  Descriptions,
  Table,
  Input,
  InputNumber,
  Popconfirm,
  Form,
  Typography,
} from "antd";
import {
  FileDoneOutlined,
  UserOutlined,
  CloseOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Nav from "./navbar";
import InfoTable from "./InfoTable"

var myCurrentDate = new Date();
const Info_screen = () => {
  const[hide, setHide] = useState("true");
  const[name, setName] = useState("Nguyễn Văn A");
  const[MS, setMS] = useState("123456789");
  const[date, setDate] = useState("1970 - 01 - 01");
  const[address, setAddress] = useState("Số X, đường Y, phường Z, quận A, thành phố B");
  const[phone, setPhone] = useState("0123456789");
  const[password, setPassword] = useState("123456");
  return (
    <div>
      <Nav pageName = "Thông tin cá nhân" 
          path = {icon_male}
          checkStu = {false} />
      <div
        className="Content"
        style={{
          paddingLeft: "120px",
          paddingRight: "120px",
          paddingTop: "50px",
          paddingBottom: "20px",
          textAlign: "left",
        }}
      >
        <Row
          style={{
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            height: "50px",
            marginBottom: "10px",
            lineHeight: "50px",
            fontSize: "16px",
          }}
        >
          <Col span={6} style={{ paddingLeft: "20px", color: "#F01836" }}>
            <b>Họ và tên</b>
            
            {/* <p id="log"></p> */}
          </Col>
          <Col span={18} style={{ color: "#1F468B" }}>
            {/* <b>Nguyễn Văn A</b> */}
            {hide?<p style={{marginLeft:'50px', width:"100%", height:"50px", fontWeight : "bold"}} id="log">{name}</p>:<Input placeholder={name} onChange={(e)=>setName(e.target.value)} style={{marginLeft:'50px', height:"30px", color:"#1F468B", width: "25vw"}}/>}
            
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            height: "50px",
            marginBottom: "10px",
            lineHeight: "50px",
            fontSize: "16px",
          }}
        >
          <Col span={6} style={{ paddingLeft: "20px", color: "#F01836" }}>
            <b>Mã số người dùng</b>
          </Col>
          <Col span={18} style={{ color: "#1F468B" }}>
          <p style={{marginLeft:'50px', width:"100%", height:"50px", fontWeight : "bold"}} id="log">{MS}</p>

          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            height: "50px",
            marginBottom: "10px",
            lineHeight: "50px",
            fontSize: "16px",
          }}
        >
          <Col span={6} style={{ paddingLeft: "20px", color: "#F01836" }}>
            <b>Ngày sinh</b>
          </Col>
          <Col span={18} style={{ color: "#1F468B" }}>
          {hide?<p style={{marginLeft:'50px', width:"100%", height:"50px", fontWeight : "bold"}} id="log">{date}</p>:<Input placeholder={date} type ="date" onChange={(e)=>setDate(e.target.value)} style={{marginLeft:'50px', height:"30px", color:"#1F468B", width: "25vw"}}/>}
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            height: "50px",
            marginBottom: "10px",
            lineHeight: "50px",
            fontSize: "16px",
          }}
        >
          <Col span={6} style={{ paddingLeft: "20px", color: "#F01836" }}>
            <b>Địa chỉ thường trú</b>
          </Col>
          <Col span={18} style={{ color: "#1F468B" }}>
            {/* <b>Số X, đường Y, phường Z, quận A, thành phố B</b> */}
            {hide?<p style={{marginLeft:'50px', width:"100%", height:"50px", fontWeight : "bold"}} id="log">
              {address}
              </p>:<Input placeholder={address} onChange={(e)=>setAddress(e.target.value)} style={{marginLeft:'50px', height:"30px", width:"35vw", color:"#1F468B", width: "25vw"}}/>}
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            height: "50px",
            marginBottom: "10px",
            lineHeight: "50px",
            fontSize: "16px",
          }}
        >
          <Col span={6} style={{ paddingLeft: "20px", color: "#F01836" }}>
            <b>Số điện thoại</b>
          </Col>
          <Col span={18} style={{ color: "#1F468B" }}>
          {hide?<p style={{marginLeft:'50px', width:"100%", height:"50px", fontWeight : "bold"}} id="log">{phone}</p>:<Input placeholder={phone} onChange={(e)=>setPhone(e.target.value)} style={{marginLeft:'50px', height:"30px", color:"#1F468B", width: "25vw"}}/>}
          </Col>
        </Row>
        <Row
          style={{
            width: "100%",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.1) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
            height: "50px",
            marginBottom: "10px",
            lineHeight: "50px",
            fontSize: "16px",
          }}
        >
          <Col span={6} style={{ paddingLeft: "20px", color: "#F01836" }}>
            <b>Mật khẩu</b>
          </Col>
          <Col span={18} style={{ color: "#1F468B" }}>
          {hide?<p style={{marginLeft:'50px', width:"100%", height:"50px", fontWeight : "bold"}} >******</p>
          :<Input placeholder={password} onChange={(e)=>setPassword(e.target.value)} type = "password" style={{marginLeft:'50px', height:"30px", color:"#1F468B", width: "25vw"}}/>}
          </Col>
        </Row>
        <Button
          style={{
            borderRadius: "8px",
            backgroundColor: "#1F468B",
            borderColor: "#1F468B",
            marginTop: "10px",
            // padding: "10px 20px 10px 20px",
          }}
          size="large"
          type="primary"
          onClick={()=>setHide(!hide)} //arrow function
        >
          {hide && <b style={{ color: "white" }}>Chỉnh sửa</b>}
          {!hide && <b style={{ color: "white" }}>Lưu</b>}
        </Button>
      </div>
    </div>
  );
};

export default Info_screen;
