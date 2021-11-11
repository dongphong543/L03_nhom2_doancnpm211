import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import logo from "./assets/S_logo.png";
import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import "./App.css";

export default function Login() {
  return (
    <div>
      <Row className="row">
        <Col className="Col1" flex={3} style={{ justifyContent: "center" }}>
          <img
            className="photo"
            src={logo}
            alt="Logo"
            style={{
              verticalAlign: "middle",
              marginTop: "20vh",
              marginLeft: "5vw",
              marginRight: "5vw",
              marginBottom: "-5vh",
              maxWidth: "40vw",
            }}
          />
        </Col>

        <Col
          flex={5}
          style={{
            marginBottom: "auto",
            height: "70vh",
          }}
        >
          <Card
            className="CardLogin"
            style={{
              textAlign: "center",
              width: 400,
              borderRadius: "8px",
              marginLeft: "auto",
              marginRight: "auto",
              boxShadow: "5px 8px 24px 5px rgba(210, 210, 210, 0.6)",
            }}
          >
            <Input
              size="large"
              placeholder=" Tên đăng nhập"
              prefix={<UserOutlined />}
              allowClear="true"
              style={{
                height: "50px",
                borderRadius: "8px",
              }}
            />
            <br />
            <Input.Password
              size="large"
              placeholder=" Mật khẩu"
              prefix={<QuestionCircleOutlined />}
              style={{ height: "50px", borderRadius: "8px", marginTop: "10px" }}
            />
            <br />
            <Button
              style={{
                borderRadius: "8px",
                backgroundColor: "#1F468B",
                borderColor: "#1F468B",
                width: "350px",
                height: "50px",
                marginTop: "10px",
              }}
              size="large"
              type="primary"
              onClick={() => alert("You pressed")}
            >
              <b style={{ fontSize: "20px" }}>Đăng nhập</b>
            </Button>
            <br />
            <Button
              style={{
                borderRadius: "8px",
                color: "#1F468B",
              }}
              size="large"
              type="link"
              onClick={() => alert("You pressed")}
            >
              <span style={{ fontSize: "15px" }}>Quên mật khẩu? </span>
            </Button>
            <hr
              style={{
                backgroundColor: "#eee",
                height: 0.1,
                width: 350,
                borderColor: "transparent",
                boxShadow: "0px",
              }}
            />
            <span style={{ color: "#1F468B" }}>Chưa có tài khoản?</span>
            <Button
              style={{
                color: "#1F468B",
                marginLeft: "-10px",
                marginRight: "-20px",
              }}
              size="large"
              type="link"
              onClick={() => alert("You pressed")}
            >
              <b>Tạo tài khoản mới</b>
            </Button>
          </Card>
        </Col>
      </Row>

      <Row>
        {" "}
        <div GHelllo />
      </Row>
      {/* <Button type="primary">Button</Button> */}
    </div>
  );
}
// export default Login;
