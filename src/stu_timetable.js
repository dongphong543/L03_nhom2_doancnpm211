import React from "react";
import { Row, Col, Card, Input, Button } from "antd";
import { useState } from "react";
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

const InputSubj = (props) => {
  const [name, setName] = useState("")
  return (
    <Col flex={1} >
        {props.onEdit &&
        <Input
          placeholder={props.subj}
          allowClear="true"
          style={{
            width: "10vw",
            maxWidth: "100px",
            marginTop: "-1vh",
            borderColor: "White",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onChange={(e) => setName(e.target.value)}
        />
        }
        {!props.onEdit &&
        <div
          allowClear="true"
          style={{
            width: "10vw",
            maxWidth: "100px",
            borderColor: "White",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: "15px"
          }}
        >
          {name}
        </div>
        }
      </Col>
  )
}

const Period = (props) => {
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
        <span style={{ color: "#1F468B", fontSize: "15px" }}>{props.period}</span>
      </Col>
      <InputSubj subj="Tên môn" onEdit={props.onEdit}/>
      <InputSubj subj="Tên môn" onEdit={props.onEdit}/>
      <InputSubj subj="Tên môn" onEdit={props.onEdit}/>
      <InputSubj subj="Tên môn" onEdit={props.onEdit}/>
      <InputSubj subj="Tên môn" onEdit={props.onEdit}/>
      <InputSubj subj="Tên môn" onEdit={props.onEdit}/>
    </Row>
  </Card>
  )
}

const Timetable = () => {
  const [edit, setEdit] = useState(false);
  return(
    <div style={{ marginBottom: "20vh"}}>
      <Nav pageName="Thời khóa biểu"
          path={agenda}
          checkStu={true}/>

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

    <Period period="Tiết 1" onEdit={edit} />
    <Period period="Tiết 2" onEdit={edit} />
    <Period period="Tiết 3" onEdit={edit} />
    <Period period="Tiết 4" onEdit={edit} />
    <Period period="Tiết 5" onEdit={edit} />
    <br/>
    <b style={{ 
      color: "#F01836", 
      fontSize: "15px", 
      marginLeft: "11.5vw",  
    }}>
      CHIỀU
    </b>
    <Period period="Tiết 1" onEdit={edit} />
    <Period period="Tiết 2" onEdit={edit} />
    <Period period="Tiết 3" onEdit={edit} />
    <Period period="Tiết 4" onEdit={edit} />
    <Period period="Tiết 5" onEdit={edit} />

    <div style={{
          verticalAlign: "middle",
          textAlign: "center",}}>
      <Button
        style={{
          borderRadius: "8px",
          backgroundColor: "#1F468B",
          borderColor: "#1F468B",
          height: "40px",
          marginTop: "20px",
          margin: "30px 0px",
        }}
        size="large"
        type="primary"
        onClick={() => {
          if (edit) {
            alert("Lưu thời khóa biểu thành công")
            setEdit(!edit)
            }
          else setEdit(!edit)
        }}
      >
      {edit && <b style={{ fontSize: "16px" }}>Lưu</b>}
      {!edit && <b style={{ fontSize: "16px" }}>Chỉnh sửa</b>}
      </Button>
    </div>
  </div>
  );
};

export default Timetable;
