import React from "react";
import { Row, Col, Card, Input, Button, DatePicker, Select, Radio } from "antd";
import logo from "./assets/S_logo.png";
import moment from "moment";
//import { UserOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import "./App.css";
import styles from "./TestPage.less";

const { Option } = Select;

const Signup = () => {
  const [value, setValue] = React.useState(1);
  // const [pass, setPass] = React.useState("");

  const onChange = (e) => {
    //console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  // const onChangePass = (e) => {
  //   //console.log("radio checked", e.target.value);
  //   if (e.length < 6) {
  //     alert("Pass too short");
  //   } else {
  //     setPass(e);
  //   }
  // };

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: "40vw",
          maxWidth: "250px",
          display: "block",
          margin: "auto",
          paddingTop: "10vh",
        }}
      />
      <br />
      <Card
        style={{
          textAlign: "center",
          width: 400,
          borderRadius: "8px",
          margin: "auto",
          boxShadow: "5px 8px 24px 5px rgba(210, 210, 210, 0.6)",
        }}
      >
        <Row gutter={10}>
          <Col span="12">
            <Input
              size="large"
              placeholder="Họ"
              allowClear="true"
              style={{
                height: "50px",
                borderRadius: "8px",
              }}
            />
          </Col>
          <Col span="12">
            <Input
              size="large"
              placeholder="Tên"
              allowClear="true"
              style={{
                height: "50px",
                borderRadius: "8px",
              }}
            />
          </Col>
        </Row>
        <Row>
          <Input
            size="large"
            placeholder="Số di động hoặc email"
            allowClear="true"
            style={{
              marginTop: "10px",
              height: "50px",
              borderRadius: "8px",
            }}
          />
        </Row>

        <Row>
          <Input.Password
            // value={pass}
            // onChange={() => setPass(pass)}
            // onBlur={() => onChangePass(pass)}
            size="large"
            placeholder="Mật khẩu"
            style={{ height: "50px", borderRadius: "8px", marginTop: "10px" }}
          />
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col
            style={{
              width: "150px",
              textAlign: "left",
              marginLeft: "5px",
            }}
          >
            <span style={{ color: "#888", textAlign: "left" }}>
              <b> {"Ngày sinh"} </b>
            </span>
          </Col>

          <Col
            style={{
              width: "150px",
              maxHeight: "100px",
              textAlign: "left",
              marginLeft: "15px",
            }}
          >
            <span style={{ color: "#888", textAlign: "left" }}>
              <b> {"Giới tính"} </b>
            </span>
          </Col>
        </Row>
        <Row>
          <Col span="10">
            <DatePicker
              size="large"
              style={{
                height: "50px",
                borderRadius: "8px",
                marginTop: "10px",
                fontSize: "16px",
              }}
              defaultValue={moment("01/01/2001", "DD/MM/YYYY")}
              format={"DD/MM/YYYY"}
            />
          </Col>

          <Col span="14">
            {/* <Select
              size="large"
              dropdownStyle={{ borderRadius: "8px" }}
              style={{
                width: "170px",
                marginTop: "10px",
                textAlign: "left",
              }}
              placeholder="Chọn" // heyy
              // onChange={handleChange}
            >
              <Option value="Nam">Nam</Option>
              <Option value="Nu">Nữ</Option>
              <Option value="Khac"> Khác </Option>
            </Select> */}
            <Radio.Group
              onChange={onChange}
              value={value}
              style={{
                marginTop: "10px",
                marginLeft: "20px",
              }}
            >
              <Radio.Button
                value={1}
                style={{
                  height: "50px",
                  borderRadius: "8px 0px 0px 8px",
                  fontSize: "16px",
                  paddingTop: "8px",
                }}
              >
                Nam
              </Radio.Button>
              <Radio.Button
                value={2}
                style={{
                  height: "50px",
                  fontSize: "16px",
                  paddingTop: "8px",
                }}
              >
                Nữ
              </Radio.Button>
              <Radio.Button
                value={3}
                style={{
                  height: "50px",
                  borderRadius: "0px 8px 8px 0px",
                  fontSize: "16px",
                  paddingTop: "8px",
                }}
              >
                Khác
              </Radio.Button>
            </Radio.Group>
          </Col>
        </Row>

        <Row style={{ marginTop: "10px" }}>
          <Col
            style={{
              width: "145px",
              textAlign: "left",
              marginLeft: "5px",
              paddingTop: "15px",
            }}
          >
            <span style={{ color: "#888", textAlign: "left" }}>
              <b> {"Đăng ký với tư cách"} </b>
            </span>
          </Col>
          <Col style={{ marginTop: "10px" }}>
            <Radio.Group defaultValue="hs" buttonStyle="solid">
              <Radio.Button
                style={{
                  width: "95px",
                  height: "35px",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                  paddingLeft: "12.5px",
                  fontSize: "16px",
                  //backgroundColor: "red",
                }}
                value="hs"
              >
                <b> Học sinh</b>
              </Radio.Button>
              <Radio.Button
                style={{
                  width: "103px",
                  height: "35px",
                  borderTopRightRadius: "8px",
                  borderBottomRightRadius: "8px",
                  paddingRight: "2px",
                  paddingLeft: "0px",
                  fontSize: "16px",
                }}
                value="gv"
              >
                <b>Giảng viên</b>
              </Radio.Button>
            </Radio.Group>
          </Col>
        </Row>

        <Row>
          <Button
            style={{
              borderRadius: "8px",
              //backgroundColor: "#1F468B",
              //borderColor: "#1F468B",
              width: "150px",
              height: "45px",
              marginTop: "25px",
              marginLeft: "100px",
            }}
            size="large"
            type="primary"
            onClick={() => alert("You pressed")}
          >
            <b style={{ fontSize: "18px" }}>Đăng ký</b>
          </Button>
        </Row>
      </Card>
    </div>
  );
};

export default Signup;
