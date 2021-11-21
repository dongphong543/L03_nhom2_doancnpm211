import React, { useState } from "react";
import icon_male from "./assets/icon_male.png";
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import {
  BellFilled,
  CaretDownOutlined,
  LeftCircleFilled,
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
// const onClick = ({ key }) => {
//     message.info(`Click on item ${key}`);
//   };
// const menu = (
//     <Menu onClick={onClick}>
//         <Menu.Item key="1"> <UserOutlined style={{marginRight: "1vw"}}/> Cá nhân </Menu.Item>
//         <Menu.Item key="2"> <FileDoneOutlined style={{marginRight: "1vw"}} /> Bảng điểm </Menu.Item>
//         <Menu.Item key="3" style={{ color: "red" }}><CloseOutlined style={{marginRight: "1vw"}} /> Đăng xuất </Menu.Item>
//     </Menu>
// );

var myCurrentDate = new Date();
const Info = {
  name: "Nguyễn Văn A",
  MS: "123456789",
  dateOfBirth: "01/01/2001",
  address: "Số X, đường Y, phường Z, quận A, thành phố B",
  SDT: "0123456789",
  password: "******"
}

const Info_screen = () => {
  return (
    <div>
      
      {/* <div className = "Header" style={{ height: "200px" }}>
                <div className="header-nav" style={{ display: "inline-flex", marginTop: 10, marginLeft: 30, height: '30px' }}>
                    <div>
                        <img src={logo} height='40px' />
                    </div>
                    <div className="header-blue-bar">
                        <div style={{ marginTop: "2px", textAlign: "left", marginLeft:'20px'}}> 
                        Ngày <b> {myCurrentDate.getDate()} </b> tháng <b> {myCurrentDate.getMonth()} </b> năm <b> {myCurrentDate.getFullYear()} </b>
                            <Badge count={7} size="small" style={{color:"red"}}>
                                <BellFilled style={{
                                    color: "#4AA0EB",
                                    marginLeft: "37vw",
                                }} />
                            </Badge>
                        </div>

                    </div>
                    <div className="header-red-bar">
                        <div style={{ marginTop: "4px", textAlign: "left" ,  marginLeft: "20px", color: "white" }}>
                            Xin chào, <b>Nguyễn Trung Phong</b>
                            <Dropdown overlay={menu} >
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()} style = {{marginLeft: '10px'}}>
                                <CaretDownOutlined />
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'left', marginLeft: '140px', marginTop: '50px', fontSize: '50px'}}>
                    <b>Cá nhân</b>
                </div>
            </div> */}
      <Nav pageName = "Thông tin cá nhân" 
          path = {icon_male}
          checkStu={false}/>
      {/* <div
        style={{
          marginLeft: "10vw",
          marginTop: "5vh",
        }}
      >
        <b style={{ fontSize: "40px" }}> Thông tin cá nhân </b>
        <br />
      </div>
      <img
        src={icon_male}
        style={{
          marginLeft: "75vw",
          marginTop: "-34vh",
          maxHeight: "40vh",
        }}
      /> */}
      {/* <hr
        style={{
          // marginTop: "vh",
          backgroundColor: "#eee",
          height: 0.05,
          width: "auto",
          borderColor: "transparent",
          boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
        }}
      /> */}
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
          </Col>
          <Col span={18} style={{ color: "#1F468B" }}>
            <b>Nguyễn Văn A</b>
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
            <b>123456789</b>
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
            <b>01/01/2001</b>
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
            <b>Số X, đường Y, phường Z, quận A, thành phố B</b>
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
            <b>0123456789</b>
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
            <b>******</b>
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
          onClick={() => alert("You pressed")} //arrow function
        >
          <b style={{ color: "white" }}>Chỉnh sửa</b>
        </Button>
        <InfoTable/>
      </div>
    </div>
  );
};

export default Info_screen;
