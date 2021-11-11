import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import "./App.css";
import { formatCountdown } from "antd/lib/statistic/utils";

var myCurrentDate = new Date();

export default function Forum() {
  const [{ items }, setItems] = React.useState({ items: [] });
  const addItem = () => {
    // const name = "Topic " + (items.length + 1);
    items.push(
      <div key={items.length}>
        {" "}
        <Card
          size="small"
          // title={name}
          title={
            <Input
              placeholder={"Topic " + (items.length + 1)}
              // placeholder={"Topic " + }
              bordered={false}
            />
          }
          // extra={<a href="#">Edit</a>}
          extra={
            <Button
              onClick={() => delItem()}
              style={{
                color: "white",
                backgroundColor: "red",
                outlineColor: "red",
                borderColor: "red",
                borderRadius: "4px",
              }}
            >
              {" "}
              Delete{" "}
            </Button>
          }
          style={{
            width: "80vw",
            marginLeft: "10vw",
            marginBottom: "20px",
            borderRadius: "8px",
          }}
        >
          <p>Card content</p>
        </Card>
      </div>
    );
    console.log("Add item", items);

    setItems({ items: [...items] });
  };
  const delItem = () => {
    //items.splice(key, 1);
    // for (let i = 1; i < items.length - 1; ++i) {
    //   items[i] = items[i + 1];
    // }
    console.log("abc");
    items.pop();
    console.log("del item", items);
    // items.splice(items.length - 1, 1);

    setItems({ items: [...items] });
    // setItems({ items: [...items] });
  };

  return (
    <div
      style={{
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          marginTop: "29px",
          marginLeft: "50px",
          height: "38px",
          position: "absolute",
        }}
      />
      <div
        style={{
          marginTop: "30px",
          marginLeft: "150px",
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
          }}
        >
          {" "}
          Ngày <b> {myCurrentDate.getDate()} </b> tháng
          <b> {myCurrentDate.getMonth()} </b>
          năm <b> {myCurrentDate.getFullYear()} </b>
        </span>
        <img
          src={bluebar}
          alt="blue bar"
          style={{
            height: "38px",
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          marginTop: "29px",
        }}
      >
        <span
          className="photo2"
          style={{
            marginLeft: "25px",
            marginTop: "8px",
            position: "fixed",
            color: "white",
            marginLeft: "-1150px",
          }}
        >
          {" "}
          Xin chào, <b> Chung Đông Phong </b>
        </span>

        <img
          className="photo2"
          src={redbar}
          alt="blue bar"
          style={{
            height: "39px",
            marginLeft: "-1180px",
          }}
        />
      </div>
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

      <div style={{ backgroundColor: "yellow" }}>
        {items}
        <button onClick={addItem} />
      </div>
    </div>
  );
}
//

// export default Forum;
