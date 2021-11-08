import React from "react";
import { Row, Col, Menu, Dropdown, message, Badge } from "antd";
import {FileDoneOutlined, UserOutlined, CloseOutlined, CaretDownOutlined, BellFilled} from "@ant-design/icons";

import logo from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";

var myCurrentDate = new Date();  


const App = () => (
  <div  style={{ overflowX: "hidden" }}>
    <Row>
      <Col style={{
        marginTop: "3vh",
        marginLeft: "10px",
        marginRight: "110px",
        marginBottom: "7vh"
      }}>
        <img
          className="s"
          src={logo}
          style={{
            verticalAlign: "left",
            height: "7vh",
            position: "absolute",
            marginLeft: "23px"
          }}
        />
        
      </Col>
      <Col style={{
        marginRight: "-10vw",
        marginTop: "3vh",
        minWidth: "10vw",
        maxWidth: "70vw",
      }}>
        <img
          className="bluebar" 
          src={bluebar}
          style={{
            position: "absolute",
            height: "7vh",
          }}
        />
        <figcaption style={{
          position: "absolute",
          width: "60vw",
          marginTop: "1.2vh",
          marginLeft: "3vw",
          color: "white",
          fontSize: "15px",
        }}>
          Ngày <b> {myCurrentDate.getDate()} </b> tháng
          <b> {myCurrentDate.getMonth()} </b>
          năm <b> {myCurrentDate.getFullYear()} </b> 
         
        </figcaption>
      <Col style={{
        marginRight: "-600px",
        marginTop: "2vh",
      }}>
         <Badge count={5} size="small">
          <BellFilled style={{ 
            color: "#4AA0EB",
            marginLeft: "55vw", 
          }} />
        </Badge> 
      </Col>
      
      </Col>
      
      <Col style={{
        marginLeft: "60vw",
        marginRight: "-10vw",
      }}>
        
        <img
          className="redbar"
          src={redbar}
          style={{
            marginTop: "3vh",
            maxHeight: "7vh",
            position: "absolute",
            marginLeft: "-1000px",
            paddingLeft: "calc(23vw + 737px)",
          }}
        />
        <figcaption style={{
          position: "absolute",
          right: "0px",
          
          marginRight: "-33vw",
          width: "300px",
          marginTop: "4vh",
          // marginLeft: "50px",
          color: "white",
          fontSize: "15px",
        }}>
          <Dropdown overlay={(
            <Menu onClick={ ({ key }) => {
              message.info(`Click on ${key}`)}}
              style={{ width: "120px", marginLeft: "3vw", marginTop: "1vh"}}
              >
              <Menu.Item key="Cá nhân">
                <UserOutlined style={{marginRight: "1vw"}}/> 
                Cá nhân
              </Menu.Item>
              <Menu.Item key="Bảng điểm">
                <FileDoneOutlined style={{marginRight: "1vw"}} /> 
                Bảng điểm
              </Menu.Item>
              <Menu.Item key="Đăng xuất" style={{ color: "red" }}>
                <CloseOutlined style={{marginRight: "1vw"}} /> 
                Đăng xuất
              </Menu.Item>
            </Menu>)}
          >
            <div style={{
              
            }}>
              Xin chào, <b> Nguyễn Văn A <CaretDownOutlined /> </b>
            </div>
          </Dropdown>
        </figcaption>
        </Col>  
    </Row>
</div>
);

export default App;