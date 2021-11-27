import React from "react";
import { Menu, Dropdown, message, Button, Card} from "antd";
import {
  FileDoneOutlined,
  UserOutlined,
  CloseOutlined,
  CaretDownOutlined,
  TeamOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom"; // v6
import PropTypes from "prop-types"
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";

var myCurrentDate = new Date();

const Navbar = (props) => {
  const link = (props.checkStu) ? "/shome" : "/home";
  const infoLink = (props.checkStu) ? "/stuinfo" : "/teainfo";
  return (
    <div
    style={{
      overflowX: "hidden",
      overflowY: "hidden",
      position: "relative",
      overflowY: "hidden",
    }}
    >
    <Link to={link}>
      <Card 
        style={{
          position: "absolute",
          height: "0px",
          width: "0px",
          marginTop: "-5px",
          marginLeft: "8px",
          zIndex: 10,
       }}
      >
        {props.checkStu}
       <img
         src={logo}
         style={{
           // marginTop: "20px",
           // marginLeft: "35px",
           height: "38px",
           position: "absolute",
       }}
         />
       </Card>
      </Link> 
      
    
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
        <b> {myCurrentDate.getMonth() + 1} </b>
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
              style={{ width: "150px", marginLeft: "3vw", marginTop: "1vh" }}
            >
              {
                <Link to={infoLink}>
                <Menu.Item key="Cá nhân">
                  <UserOutlined style={{ marginRight: "1vw" }} />
                  Cá nhân
                </Menu.Item>{" "}
              </Link>
              }
              
              {!props.checkStu &&
              <Link to="/classManage1">
                <Menu.Item key="Quản lý lớp học">
                <TeamOutlined style={{ marginRight: "1vw" }} />
                  Quản lý lớp học
                </Menu.Item>{" "}
              </Link>}

              {!props.checkStu &&
              <Link to="/createclass">
                <Menu.Item key="Tạo lớp học">
                  <PlusCircleOutlined style={{ marginRight: "1vw" }} />
                  Tạo lớp học
                </Menu.Item>{" "}
              </Link>}

              {props.checkStu &&
              <Link to="/ptstable">
                <Menu.Item key="Bảng điểm">
                  <FileDoneOutlined style={{ marginRight: "1vw" }} />
                  Bảng điểm
                </Menu.Item>{" "}
              </Link>}

              <Link to="/">
                <Menu.Item key="Đăng xuất" style={{ color: "red" }}>
                  <CloseOutlined style={{ marginRight: "1vw" }} />
                  Đăng xuất
                </Menu.Item>{" "}
              </Link>
            </Menu>
          }
        >
          <div style={{}}>
            Xin chào,{" "}
            {props.checkStu ?
            <b>
              {" "}
              Trần Nguyễn Văn B <CaretDownOutlined />{" "}
            </b>
            :
            <b>
              {" "}
              Nguyễn Văn A <CaretDownOutlined />{" "}
            </b>}
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

    <div
        style={{
          marginLeft: "10vw",
          marginTop: "5vh",
          position: "relative",
        }}
      >
        <b style={{ fontSize: "40px" }}> {props.pageName} </b>
        <br />
        <b style={{ fontSize: "20px" }}> {props.roomName} </b>
        <div style={{ fontSize: "20px" }}> {props.intro} </div>
    </div>

      <img
        src={props.path}
        style={{
          marginLeft: "70vw",
          marginTop: "-190px",
          height: "210px",
        }}
      />
      <img
      src={props.background}
      style={{
        marginTop: "-300px",
        marginBottom: "-25vh",
        height: "450px",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    />

      <div
        style={{
          marginTop: "5vh",
          backgroundColor: "#eee",
          height: 0.05,
          width: "auto",
          borderColor: "transparent",
          boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      />
  </div>
  )
}

Navbar.propTypes = {
  checkStu: PropTypes.bool,
}

export default Navbar

