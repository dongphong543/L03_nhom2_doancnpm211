import React from "react";
import { Row, Col, Card, Input } from "antd";
import "./App.css";

import agenda from "./assets/icon_agenda.png";
import Nav from "./navbar"


const Day = ({day}) => {
  return (
    <Col flex={1} style={{ justifyContent: "center"}}>
      <Card
        type="inner"
        size="small"
        bodyStyle={{marginTop: "-1vh", textAlign: "center", height: 40}}
        style={{
          width: "10vw",
          borderRadius: "8px",
          marginTop: "3vh",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0px 0px 10px 1px rgba(210, 210, 210, 0.6)",
        }}
      > 
      <span style={{ color: "#1F468B", fontSize: "15px" }}>{day}</span>
      </Card>
    </Col>
  )
}

const InputSubj = ({subj}) => {
  return (
    <Col flex={1} >
        <Input
          placeholder={subj}
          allowClear="true"
          style={{
            width: "10vw",
            maxWidth: "100px",
            marginTop: "-1vh",
            borderColor: "White",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      </Col>
  )
}

const Period = ({period}) => {
  return (
    <Card
    type="inner"
        size="small"
        bodyStyle={{marginTop: "-1vh", textAlign: "center", height: 40}}
        style={{
          textAlign: "center",
          width: "80vw",
          borderRadius: "8px",
          marginTop: "0.5vh",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0px 0px 10px 1px rgba(210, 210, 210, 0.6)",
        }}
    > 
    <Row>
      <Col flex={1} 
        style={{ 
        justifyContent: "left",
        marginBottom: "1vh",
        marginRight: "3vw",
      }}>
        <span style={{ color: "#1F468B", fontSize: "15px" }}>{period}</span>
      </Col>
      <InputSubj subj="Tên môn"/>
      <InputSubj subj="Tên môn"/>
      <InputSubj subj="Tên môn"/>
      <InputSubj subj="Tên môn"/>
      <InputSubj subj="Tên môn"/>
      <InputSubj subj="Tên môn"/> 
    </Row>
  </Card>
  )
}

const Timetable = () => (
  <div style={{ marginBottom: "20vh"}}>
    <Nav pageName="Thời khóa biểu"
        path={agenda}/>

  {/* ///////////////////////////////////////////////////////////////// */}
  <Row >
    <Col flex={1}  
      style={{ 
      justifyContent: "left",
      marginLeft: "7.5vw",
      // marginRight: "0.5vw",
      marginBottom: "1vh",
      }}>
      <Card
        type="inner"
        size="small"
        bodyStyle={{marginTop: "1vh", textAlign: "center", height: 40}}
        style={{
          width: "10vw",
          height: 40,
          borderRadius: "8px",
          marginTop: "3vh",
          marginLeft: "auto",
          marginRight: "auto",
          borderColor: "White",
        }}
      > 
      <b style={{ color: "#F01836", fontSize: "15px" }}>SÁNG</b>
      </Card>
    </Col> 
    <Day day="Thứ 2"/>
    <Day day="Thứ 3"/>
    <Day day="Thứ 4"/>
    <Day day="Thứ 5"/>
    <Day day="Thứ 6"/>
    <Col flex={1} 
      style={{ 
        justifyContent: "center",
        marginRight: "10vw", 
      }}> 
      <Card
        type="inner"
        size="small"
        bodyStyle={{marginTop: "-1vh", textAlign: "center", height: 40}}
        style={{
          textAlign: "center",
          width: "10vw",
          borderRadius: "8px",
          marginTop: "3vh",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "0px 0px 10px 1px rgba(210, 210, 210, 0.6)",
        }}
      > 
      <span style={{ color: "#1F468B", fontSize: "15px" }}>Thứ 7</span>
     </Card>
    </Col>  
  </Row>

  <Period period="Tiết 1"/>
  <Period period="Tiết 2"/>
  <Period period="Tiết 3"/>
  <Period period="Tiết 4"/>
  <Period period="Tiết 5"/>
  <br/>
  <b style={{ 
    color: "#F01836", 
    fontSize: "15px", 
    marginLeft: "11.5vw",  
  }}>
    CHIỀU
  </b>
  <Period period="Tiết 1"/>
  <Period period="Tiết 2"/>
  <Period period="Tiết 3"/>
  <Period period="Tiết 4"/>
  <Period period="Tiết 5"/>



  </div>
);

export default Timetable;
