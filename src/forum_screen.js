import React from "react";
import { Row, Col, Card, Input, Button, Drawer } from "antd";
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import "./App.css";
import { formatCountdown } from "antd/lib/statistic/utils";
import Nav from "./navbar";

const Forum = () => {
  const [title, setTitle] = React.useState(String);
  const [text, setText] = React.useState(String);
  const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const { TextArea } = Input;

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

  const deleteAnn = (id, anouncementCheck) => {
    setAnnouncements(
      announcements.filter((anouncement) => anouncement.id !== id)
    );
  };

  const addAnn = (title, text) => {
    // console.log(title, text);
    let num = -1;
    for (let i = 1; i < 4000000; ++i) {
      if (announcements.length == 0) {
        num = 1;
        break;
      }
      for (let j = 0; j < announcements.length; ++j) {
        if (announcements[j].id != i) {
          num = i;
          break;
        } else ++i;
      }
      if (num != -1) break;
    }
    const temp = {
      id: num,
      titleName: title,
      contentName: text,
    };
    announcements.push(temp);
    setAnnouncements(announcements);
    console.log(announcements);
  };

  return (
    <div>
      {" "}
      <Nav pageName="Diễn đàn" checkStu={false}/>
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
            }
            extra={
              <Button
                onClick={() => deleteAnn(announcement.id)}
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
        onClick={() => showDrawer()}
        style={{
          float: "right",
          color: "white",
          backgroundColor: "#23A859",
          outlineColor: "#23A859",
          borderColor: "#23A859",
          borderRadius: "4px",
          marginRight: "10vw",
        }}
      >
        {" "}
        Thêm thông báo{" "}
      </Button>
      <div style={{ color: "white", marginTop: "100px" }}> {" . "} </div>
      <Drawer
        title="THÊM THÔNG BÁO"
        placement={"right"}
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <h3> Tiêu đề thông báo</h3>
        <TextArea
          size="large"
          rows={1}
          placeholder="Tiêu đề"
          style={{
            borderRadius: "8px",
            marginBottom: "20px",
          }}
          onChange={(e) => {
            console.log(e.target.value);
            setTitle(e.target.value);
          }}
        />
        <h3> Nội dung thông báo</h3>
        <TextArea
          size="large"
          rows={8}
          placeholder="Aa"
          style={{
            borderRadius: "8px",
            marginBottom: "20px",
          }}
          onChange={(e) => {
            console.log(e.target.value);
            setText(e.target.value);
          }}
        />
        <Button
          size="large"
          onClick={() => {
            setTitle(title);
            setText(text);
            addAnn(title, text);
            onClose();
          }}
          style={{
            color: "white",
            backgroundColor: "#23A859",
            outlineColor: "#23A859",
            borderColor: "#23A859",
            borderRadius: "4px",
          }}
        >
          {" "}
          Thêm thông báo{" "}
        </Button>
      </Drawer>
    </div>
  );
};

export default Forum;
