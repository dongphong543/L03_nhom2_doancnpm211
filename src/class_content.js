import React from "react";
import { Upload, message, Button, Divider } from "antd";
import {
  CommentOutlined,
  FilePdfFilled,
  VideoCameraFilled,
  FileFilled,
  FileImageFilled,
  MinusSquareFilled,
  PlusSquareFilled,
} from "@ant-design/icons";
import "./App.css";
import { useState } from "react";

import board from "./assets/icon_board.png";
import Nav from "./navbar";

const Class_content = () => {
  const [lectures, setLectures] = useState([
    {
      id: 1,
      icon: <FilePdfFilled style={{ color: "#F01836", fontSize: "25px" }} />,
      name: "Tài liệu bài giảng 1",
    },
    {
      id: 2,
      icon: <FilePdfFilled style={{ color: "#F01836", fontSize: "25px" }} />,
      name: "Tài liệu bài giảng 2",
    },
    {
      id: 3,
      icon: (
        <VideoCameraFilled style={{ color: "#1F468B", fontSize: "25px" }} />
      ),
      name: "Video bài giảng",
    },
    {
      id: 4,
      icon: <FileImageFilled style={{ color: "#1F468B", fontSize: "25px" }} />,
      name: "Tài liệu hình ảnh",
    },
  ]);

  const [tests, setTests] = useState([
    {
      id: 1,
      icon: <FileFilled style={{ color: "#1F468B", fontSize: "25px" }} />,
      name: "Bài kiểm tra 15 phút",
    },
    {
      id: 2,
      icon: <FileFilled style={{ color: "#1F468B", fontSize: "25px" }} />,
      name: "Bài kiểm tra 1 tiết",
    },
    {
      id: 3,
      icon: <FileFilled style={{ color: "#1F468B", fontSize: "25px" }} />,
      name: "Quiz 1",
    },
    {
      id: 4,
      icon: <FileFilled style={{ color: "#F01836", fontSize: "25px" }} />,
      name: "Bài kiểm tra giữa kì",
    },
  ]);

  // const deleteLecture = (id, ) => {
  //     setLectures(lectures.filter((lecture) => lecture.id !== id))
  // }

  const deleteFile = (id, lectureCheck) => {
    if (lectureCheck)
      setLectures(lectures.filter((lecture) => lecture.id !== id));
    else setTests(tests.filter((test) => test.id != id));
  };

  return (
    <div style={{ overflowX: "hidden" }}>
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
        src={board}
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

      {/* <Upload {...props}>
                <Button><PlusSquareOutlined /></Button>
            </Upload> */}

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
          <Button
            style={{
              borderRadius: "8px",
              color: "#2E75A8",
            }}
            size="large"
            type="link"
            onClick={() => alert("You pressed on forum")}
          >
            <CommentOutlined style={{ fontSize: "25px" }} />
            <span style={{ fontSize: "17px", marginLeft: "2vw" }}>
              Forum thảo luận{" "}
            </span>
          </Button>
        </h3>

        {/* ////////////////////////// BÀI GIẢNG ////////////////////////// */}

        <Divider />
        <div style={{ width: "100%", float: "left" }}>
          <b style={{ fontSize: "25px", color: "#1F468B" }}>Bài giảng</b> <br />
          {lectures.map((lecture) => (
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
              <Button
                size="large"
                type="link"
                onClick={() => alert("You pressed on a document")}
                key={lecture.id}
              >
                {lecture.icon}
                <span
                  style={{
                    color: "#2E75A8",
                    fontSize: "17px",
                    marginLeft: "2vw",
                  }}
                >
                  {lecture.name}{" "}
                </span>
              </Button>
              <Button
                size="large"
                type="link"
                onClick={() => deleteFile(lecture.id, true)}
                style={{
                  position: "absolute",
                  right: "0px",
                  marginRight: "10vw",
                }}
              >
                <MinusSquareFilled
                  style={{ color: "#F01836", fontSize: "20px" }}
                />
              </Button>
            </h3>
          ))}
          <Button
            size="large"
            type="link"
            onClick={() => alert("You pressed add lecture")}
            style={{
              position: "absolute",
              right: "0px",
              marginRight: "10vw",
            }}
          >
            <PlusSquareFilled style={{ color: "#23A859", fontSize: "20px" }} />
          </Button>{" "}
          <br />
        </div>

        {/* ////////////////////////// BÀI KIỂM TRA ////////////////////////// */}
        <Divider />
        <div style={{ width: "100%", float: "left" }}>
          <b style={{ fontSize: "25px", color: "#1F468B" }}>Bài kiểm tra</b>{" "}
          <br />
          {tests.map((test) => (
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
              <Button
                size="large"
                type="link"
                onClick={() => alert("You pressed on a test")}
                key={test.id}
              >
                {test.icon}
                <span
                  style={{
                    color: "#2E75A8",
                    fontSize: "17px",
                    marginLeft: "2vw",
                  }}
                >
                  {test.name}{" "}
                </span>
              </Button>
              <Button
                size="large"
                type="link"
                onClick={() => deleteFile(test.id, false)}
                style={{
                  position: "absolute",
                  right: "0px",
                  marginRight: "10vw",
                }}
              >
                <MinusSquareFilled
                  style={{ color: "#F01836", fontSize: "20px" }}
                />
              </Button>
            </h3>
          ))}
          <Button
            size="large"
            type="link"
            onClick={() => alert("You pressed add test")}
            style={{
              position: "absolute",
              right: "0px",
              marginRight: "10vw",
            }}
          >
            <PlusSquareFilled style={{ color: "#23A859", fontSize: "20px" }} />
          </Button>{" "}
          <br />
        </div>
      </div>
    </div>
  );
};

export default Class_content;
