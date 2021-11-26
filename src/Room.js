import React, { useState } from "react";
import icon_board from "./assets/icon_board.png";
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

const Room = (props) => {
  return (
    <>
      <Nav pageName="Nội dung lớp học" 
        roomName={props.room}
        path={icon_board}
        checkStu={true}/>
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
            <Link to="/sforum">
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
            <Link to = "/testui"
              style={{ color: "#2E75A8", fontSize: "17px", marginLeft: "2vw" }}
              // href=""
            >
              Bài kiểm tra số 1
            </Link>
            </h3>
          <br />
        </div>
      </div>
    </>
  );
};

export default Room;
