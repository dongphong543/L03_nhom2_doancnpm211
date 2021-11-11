import React from "react";
import { Row, Col, Menu, Dropdown, message, Badge } from "antd";
import {
  FileDoneOutlined,
  UserOutlined,
  CloseOutlined,
  CaretDownOutlined,
  BellFilled,
} from "@ant-design/icons";

import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";

var myCurrentDate = new Date();

const App = () => (
  <div
    style={{
      overflowX: "hidden",
      position: "relative",
    }}
  >
    <img
      src={logo}
      style={{
        marginTop: "20px",
        marginLeft: "35px",
        height: "38px",
        position: "absolute",
      }}
    />
    <div
      style={{
        marginTop: "20px",
        marginLeft: "120px",
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
          fontSize: "15px",
        }}
      >
        {" "}
        Ngày <b> {myCurrentDate.getDate()} </b> tháng
        <b> {myCurrentDate.getMonth()} </b>
        năm <b> {myCurrentDate.getFullYear()} </b>
        {/* <Badge count={5} size="small">
          <BellFilled style={{ 
            color: "#4AA0EB",
            marginLeft: "400px", 
          }} />
        </Badge> */}
      </span>

      <img
        src={bluebar}
        style={{
          height: "38px",
        }}
      />
    </div>
    <div
      style={{
        position: "relative",
        marginTop: "20px",
      }}
    >
      <span
        style={{
          right: "0px",
          position: "absolute",
          width: "300px",
          marginTop: "6px",
          color: "white",
          fontSize: "15px",
        }}
      >
        <Dropdown
          overlay={
            <Menu
              onClick={({ key }) => {
                message.info(`Click on ${key}`);
              }}
              style={{ width: "120px", marginLeft: "3vw", marginTop: "1vh" }}
            >
              <Menu.Item key="Cá nhân">
                <UserOutlined style={{ marginRight: "1vw" }} />
                Cá nhân
              </Menu.Item>
              <Menu.Item key="Bảng điểm">
                <FileDoneOutlined style={{ marginRight: "1vw" }} />
                Bảng điểm
              </Menu.Item>
              <Menu.Item key="Đăng xuất" style={{ color: "red" }}>
                <CloseOutlined style={{ marginRight: "1vw" }} />
                Đăng xuất
              </Menu.Item>
            </Menu>
          }
        >
          <div style={{}}>
            Xin chào,{" "}
            <b>
              {" "}
              Nguyễn Văn A <CaretDownOutlined />{" "}
            </b>
          </div>
        </Dropdown>
      </span>

      <img
        src={redbar}
        style={{
          marginLeft: "-1090px",
          height: "38px",
          paddingLeft: "calc(100vw + 737px)",
        }}
      />
    </div>
  </div>
);

export default App;
