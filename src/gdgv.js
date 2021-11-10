import CardC from './Card'
import Gdgvnav from './gdgvnav'

import { Row, Col } from "antd";
import agenda from "./assets/icon_agenda.png";
import board from "./assets/icon_board.png";
import female from "./assets/icon_female.png";
import plus from "./assets/icon_plus.png";
import students from "./assets/icon_students.png";

import "./App.css"

const style={
  marginTop: "5vh",
  marginLeft: "27vh",
  marginRight: "-12vh"
};

const App = () => {
  return (
    <div className="App">
      <Gdgvnav />
      <Row>
        <Col style={style}>
          <CardC link={board} text="Lớp học" />
        </Col>
        <Col style={style}>
          <CardC link={plus} text="Tạo lớp học" />
        </Col>
        <Col style={style}>
          <CardC link={students} text="Quản lý lớp học" />
        </Col>
        <Col style={style}>
          <CardC link={agenda} text="Lịch dạy học" />
        </Col>
        <Col style={style}>
          <CardC link={female} text="Cá nhân" />
        </Col>
      </Row>
    </div>
  );
}

export default App;