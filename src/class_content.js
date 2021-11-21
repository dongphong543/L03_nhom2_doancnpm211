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
import { Link } from "react-router-dom";
import AddLecture from "./AddLecture";

const Class_content = () => {
  const [lectures, setLectures] = useState([
    {
      id: 1,
      icon: <FilePdfFilled style={{ color: "#F01836", fontSize: "25px" }} />,
      name: "Tài liệu bài giảng 1",
      link: "https://www.youtube.com/watch?v=bU86q1ycG1o"
    },
    {
      id: 2,
      icon: <FilePdfFilled style={{ color: "#F01836", fontSize: "25px" }} />,
      name: "Tài liệu bài giảng 2",
      link: "https://www.youtube.com/watch?v=bU86q1ycG1o"
    },
    {
      id: 3,
      icon: (
        <VideoCameraFilled style={{ color: "#1F468B", fontSize: "25px" }} />
      ),
      name: "Video bài giảng",
      link: "https://www.youtube.com/watch?v=bU86q1ycG1o"
    },
    {
      id: 4,
      icon: <FileImageFilled style={{ color: "#1F468B", fontSize: "25px" }} />,
      name: "Tài liệu hình ảnh",
      link: "https://www.youtube.com/watch?v=bU86q1ycG1o"
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

  // Add lecture
  const addLec = (lecture) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const icon = <FilePdfFilled style={{ color: "#F01836", fontSize: "25px" }} />
    const newLecture = { id, icon, ...lecture }
    setLectures([...lectures, newLecture])
  }

  // Delete lecture or test
  const deleteFile = (id, lectureCheck) => {
    if (lectureCheck)
      setLectures(lectures.filter((lecture) => lecture.id !== id));
    else setTests(tests.filter((test) => test.id != id));
  };

  // Toggle add lecture
  const [showAddLec, setShowAddLec] = useState(false)

  return (
    <div>
      <Nav pageName="Nội dung lớp học"
           roomName="829717313 - Toán 11 - Nguyễn Thị A"
           path={board}
           checkStu={false}/>

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
            >
              <CommentOutlined style={{ fontSize: "25px" }} />
              <span style={{ fontSize: "17px", marginLeft: "2vw" }}>
                Forum thảo luận{" "}
              </span>
            </Button>
          </Link>
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
                key={lecture.id}
              >
                {lecture.icon}
                <a
                  style={{
                    color: "#2E75A8",
                    fontSize: "17px",
                    marginLeft: "2vw",
                  }}
                  href={lecture.link}
                >
                    {lecture.name}{" "}
                </a>
              </Button>
              <Button
                size="large"
                type="link"
                onClick={() => {
                  if (window.confirm("Bạn có chắc muốn xóa bài giảng này ?")) 
                  deleteFile(lecture.id, true)
                }}
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
            onClick={() => setShowAddLec(!showAddLec)} 
            style={{
              position: "absolute",
              right: "0px",
              marginRight: "10vw",
            }}
          >
            <PlusSquareFilled style={{ color: "#23A859", fontSize: "20px" }} />
          </Button>{" "}
          <br />
          {showAddLec && <AddLecture onAdd={addLec}/>}
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
                onClick={() => {
                  if (window.confirm("Bạn có chắc muốn xóa bài kiểm tra này ?")) 
                  deleteFile(test.id, false)}}
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
          <Link to="/addtest">
          <Button
            size="large"
            type="link"
            // onClick={() => alert("You pressed add test")}
            style={{
              position: "absolute",
              right: "0px",
              marginRight: "10vw",
            }}
          >
            <PlusSquareFilled style={{ color: "#23A859", fontSize: "20px" }} />
          </Button>{" "}
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Class_content;
