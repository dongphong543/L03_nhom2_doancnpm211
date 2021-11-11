import React from "react";
import { Row, Col, Badge, Menu, Dropdown, message } from "antd";

import sletter from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import student from "./assets/stu_backgr.jpg";
import {FileDoneOutlined, UserOutlined, CloseOutlined, CaretDownOutlined, BellFilled} from "@ant-design/icons";

var myCurrentDate = new Date();  

const App = () => (
  <div style={{ overflowX: "hidden", overflowY: 'hidden'}}>
    <Row>
      <Col style={{
        marginTop: "3vh",
        marginLeft: "3vw",
        marginRight: "15vh",
      }}>
        <img
          className="s"
          src={sletter}
          style={{
            verticalAlign: "left",
            height: "7vh",
            position: "absolute",
            zIndex: '3'
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
            zIndex: '3'
          }}
        />
        <figcaption style={{
          position: "absolute",
          width: "60vw",
          marginTop: "1.2vh",
          marginLeft: "3vw",
          color: "white",
          fontSize: "15px",
          zIndex: '3'
        }}>
          Ngày&nbsp; <b> {myCurrentDate.getDate()} </b> &nbsp;tháng
          &nbsp;<b> {myCurrentDate.getMonth()} </b> &nbsp;
          năm&nbsp; <b> {myCurrentDate.getFullYear()} </b> 
         
        </figcaption>
        <Col style={{
          marginRight: "-600px",
          marginTop: "2vh",
        }}>
          <Badge count={5} size="small" style={{zIndex: '5', position: '-webkit-sticky'}}>
            <BellFilled style={{ 
              color: "#4AA0EB",
              marginLeft: "55vw", 
              zIndex: '5',
              position: 'relative'
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
            height: "7vh",
            position: "absolute",
            marginLeft: "-1000px",
            paddingLeft: "calc(23vw + 737px)",
            zIndex: '3'
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
              style={{ width: "120px", marginLeft: "3vw", marginTop: "1vh", zIndex: '3'}}
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
              zIndex: '3'
            }}>
              Xin chào, <b> Nguyễn Văn A <CaretDownOutlined /> </b>
            </div>
          </Dropdown>
        </figcaption>
        </Col>  
    </Row>
    <div style={{ 
        marginLeft: "10vw",
        marginTop: "8vh",
      }}>  
      <b style={{ fontSize: "45px", position: 'relative', zIndex: '3'}}>
        Steasy!
      </b> 
      <br />
      <div style={{ fontSize: "22px", position: 'relative', zIndex: '3'}}>
      Từ nay việc học trở nên dễ dàng và ngăn nắp hơn bao giờ hết
      </div> 
    </div>
    <img
      className="ttb"
      src={student}
      style={{
        marginTop: "-37vh",
        marginBottom: "-10vh",
        maxHeight: "60vh",
        overflowX: "hidden",
        overflowY: "hidden",
        zIndex: '1',
      }}
    />
    <hr
      style={{
        backgroundColor: "#eee",
        height: 0.05,
        width: "auto",
        position: "relative",
        borderColor: "transparent",
        boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
        zIndex: '2'
      }}
    />
  </div>
);

export default App;