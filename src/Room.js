import React, { useState } from "react";
import icon_board from "./assets/icon_board.png";
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import {
  BellFilled,
  CaretDownOutlined,
  LeftCircleFilled,
  VideoCameraFilled,
} from "@ant-design/icons";
//import "./Room.css";
import { Link } from "react-router-dom"; // v6

import Nav from "./navbar";
import {
  Divider,
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
  CommentOutlined,
  FileImageFilled,
  FilePdfFilled,
  FileDoneOutlined,
  UserOutlined,
  CloseOutlined,
  DownOutlined,
  FileFilled,
} from "@ant-design/icons";
const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">
      {" "}
      <UserOutlined style={{ marginRight: "1vw" }} /> Cá nhân{" "}
    </Menu.Item>
    <Menu.Item key="2">
      {" "}
      <FileDoneOutlined style={{ marginRight: "1vw" }} /> Bảng điểm{" "}
    </Menu.Item>
    <Menu.Item key="3" style={{ color: "red" }}>
      <CloseOutlined style={{ marginRight: "1vw" }} /> Đăng xuất{" "}
    </Menu.Item>
  </Menu>
);
const Room = () => {
  return (
    <>
      <Nav />
      <div
        style={{
          marginLeft: "10vw",
          marginTop: "5vh",
        }}
      >
        <b style={{ fontSize: "40px" }}> Nội dung lớp học </b>
        <br />
        <b style={{ fontSize: "20px" }}>829717313 - Toán 11 - Nguyễn Thị A</b>
      </div>
      <img
        src={icon_board}
        style={{
          marginLeft: "75vw",
          marginTop: "-34vh",
          maxHeight: "40vh",
        }}
      />
      <hr
        style={{
          // marginTop: "vh",
          backgroundColor: "#eee",
          height: 0.05,
          width: "auto",
          borderColor: "transparent",
          boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
        }}
      />
      <div
        className="Content"
        style={{
          paddingLeft: "140px",
          paddingRight: "140px",
          paddingTop: "50px",
          paddingBottom: "20px",
          textAlign: "left",
        }}
      >
        {/* FORUM */}
        <div
          style={{
            display: "flex",
            margin: "auto",
            width: "80vw",
            flexWrap: "wrap",
            marginTop: "3vh",
          }}
        >
          <div style={{ width: "100%", float: "left" }}>
            <b style={{ fontSize: "25px", color: "#1F468B" }}>Forum</b> <br />
          </div>
          <h3
            style={{
              // borderRadius: "8px",
              background: "#F4F4F4",
              margin: "5px",
              padding: "2px 15px",
              cursor: "pointer",
              width: "80vw",
              textAlign: "left",
            }}
          >
            <Link to="/forum">
              <Button
                style={{
                  borderRadius: "8px",
                  color: "#2E75A8",
                }}
                size="large"
                type="link"
                // onClick={() => alert("You pressed on forum")}
              >
                <CommentOutlined style={{ fontSize: "25px" }} />
                <span style={{ fontSize: "17px", marginLeft: "2vw" }}>
                  Forum thảo luận{" "}
                </span>
              </Button>
            </Link>
          </h3>
        </div>
        {/* BÀI GIẢNG */}
        <Divider />
        <div style={{ width: "100%", float: "left", marginBottom: "20px" }}>
          <b style={{ fontSize: "25px", color: "#1F468B" }}>Bài giảng</b> <br />
          {/* <b style={{fontSize:'large'}}>Chương 1</b> */}
          <h3
            style={{
              // borderRadius: "8px",
              background: "#F4F4F4",
              margin: "5px",
              padding: "2px 15px",
              cursor: "pointer",
              width: "80vw",
              textAlign: "left",
            }}
          >
            <FilePdfFilled style={{ color: "#F01836", fontSize: "25px" }} />{" "}
            <a
              style={{ color: "#2E75A8", fontSize: "17px", marginLeft: "2vw" }}
              href="https://www.youtube.com/watch?v=bU86q1ycG1o"
            >
              Tài liệu bài giảng 1
            </a>{" "}
            <br />
          </h3>
          <h3
            style={{
              // borderRadius: "8px",
              background: "#F4F4F4",
              margin: "5px",
              padding: "2px 15px",
              cursor: "pointer",
              width: "80vw",
              textAlign: "left",
            }}
          >
            <FilePdfFilled style={{ color: "#F01836", fontSize: "25px" }} />{" "}
            <a
              style={{ color: "#2E75A8", fontSize: "17px", marginLeft: "2vw" }}
              href="https://www.youtube.com/watch?v=bU86q1ycG1o"
            >
              Tài liệu bài giảng 2
            </a>{" "}
            <br />
          </h3>
          <h3
            style={{
              // borderRadius: "8px",
              background: "#F4F4F4",
              margin: "5px",
              padding: "2px 15px",
              cursor: "pointer",
              width: "80vw",
              textAlign: "left",
            }}
          >
            <VideoCameraFilled style={{ color: "#1F468B", fontSize: "25px" }} />{" "}
            <a
              style={{ color: "#2E75A8", fontSize: "17px", marginLeft: "2vw" }}
              href="https://www.youtube.com/watch?v=bU86q1ycG1o"
            >
              Video bài giảng
            </a>{" "}
            <br />
          </h3>
          <h3
            style={{
              // borderRadius: "8px",
              background: "#F4F4F4",
              margin: "5px",
              padding: "2px 15px",
              cursor: "pointer",
              width: "80vw",
              textAlign: "left",
            }}
          >
            <FileImageFilled style={{ color: "#1F468B", fontSize: "25px" }} />{" "}
            <a
              style={{ color: "#2E75A8", fontSize: "17px", marginLeft: "2vw" }}
              href="https://www.youtube.com/watch?v=XlRJzLFDGAA"
            >
              Tài liệu hình ảnh
            </a>
          </h3>
        </div>
                      {/* BÀI KIỂM TRA */}
                      <Divider />
        <div style={{ width: "100%", float: "left" }}>
          <b style={{ fontSize: "25px", color: "#1F468B" }}>Bài kiểm tra</b>{" "}
          <br />

            <h3
              style={{
                // borderRadius: "8px",
                background: "#F4F4F4",
                margin: "5px",
                padding: "2px 15px",
                cursor: "pointer",
                width: "80vw",
                textAlign: "left",
              }}
            >
              <FileFilled style={{ color: "#1F468B", fontSize: "25px" }}  />{" "}
            <a
              style={{ color: "#2E75A8", fontSize: "17px", marginLeft: "2vw" }}
              // href=""
            >
              Bài kiểm tra số 1
            </a>
            </h3>
          <br />
        </div>
      </div>
    </>
  );
};

export default Room;
