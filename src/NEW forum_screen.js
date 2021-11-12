import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import "./App.css";
import { formatCountdown } from "antd/lib/statistic/utils";
import Nav from "./navbar";

const Forum = () => {
  const [announcements, setAnnouncements] = React.useState([
    {
      id: 1,
      titleName: "Thông báo 1",
      contentName: "ABC Announcement",
    },
    {
      id: 2,
      titleName: "Thông báo 2",
      contentName: "ABC Announcement",
    },
    {
      id: 3,
      titleName: "Thông báo 3",
      contentName: "ABC Announcement",
    },
  ]);

  const deleteFile = (id, anouncementCheck) => {
    if (anouncementCheck) {
      setAnnouncements(
        announcements.filter((anouncement) => anouncement.id !== id)
      );
      console.log(announcements);
    }
    // else setTests(tests.filter((test) => test.id != id));
  };

  const addFile = (id, anouncementCheck) => {
    alert("Hey!");
  };

  return (
    <div>
      {" "}
      <Nav />
      <div
        style={{
          marginTop: "25px",
          marginLeft: "150px",
          marginBottom: "25px",
          fontSize: "48px",
          fontWeight: "bold",
          color: "#222",
        }}
      >
        Diễn đàn
      </div>
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
      {announcements.map((announcement) => (
        <div>
          <Card
            size="small"
            title={
              <h3
                style={{
                  marginLeft: "10px",
                }}
              >
                {announcement.titleName}
              </h3>
              // <Input
              //   placeholder={announcement.titleName}
              //   // defaultValue={announcement.titleName}
              //   bordered={false}
              // />
            }
            extra={
              <Button
                onClick={() => deleteFile(announcement.id, true)}
                style={{
                  color: "white",
                  backgroundColor: "red",
                  outlineColor: "red",
                  borderColor: "red",
                  borderRadius: "4px",
                }}
              >
                {" "}
                Xóa{" "}
              </Button>
            }
            style={{
              width: "80vw",
              marginLeft: "10vw",
              marginBottom: "20px",
              borderRadius: "8px",
            }}
          >
            <p
              style={{
                marginLeft: "10px",
              }}
            >
              {announcement.contentName}
            </p>
          </Card>
        </div>
      ))}
      <Button
        onClick={() => addFile("10", true)}
        style={{
          float: "right",
          color: "white",
          backgroundColor: "#23A859",
          outlineColor: "#23A859",
          borderColor: "#23A859",
          borderRadius: "4px",
          marginRight: "11vw",
        }}
      >
        {" "}
        Thêm thông báo{" "}
      </Button>
    </div>
  );
};

export default Forum;
