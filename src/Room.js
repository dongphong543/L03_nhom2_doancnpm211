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
  var a = localStorage.getItem('name')
  return (
    <div>
      <Nav pageName="Nội dung lớp học"
          roomName={props.room}
          path={icon_board}
          checkStu={true}/>

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
            </h3>
          ))}
          <br />
          {showAddLec}
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
            <Link to="/testui">
              <Button
                size="large"
                type="link"
                onClick={() => alert("Bắt đầu làm bài kiểm tra")}
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
              </Link>
            </h3>
          ))}
          
          <br />
        </div>
      </div>
    </div>
  );
};

export default Room;
