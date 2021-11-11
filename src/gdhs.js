import CardC from './Card'
import Gdhsnav from './gdhsnav'

import { Row, Col } from "antd";
import agenda from "./assets/icon_agenda.png";
import aplus from "./assets/icon_aplus.png";
import board from "./assets/icon_board.png";
import male from "./assets/icon_male.png";

const style={
  marginTop: "5vh",
  marginLeft: "22vh",
  marginRight: "-17vh"
};

const App = () => {
  return (
    <div className="App">
      <Gdhsnav />
      <Row>
        <Col style={style}>
          <CardC link={board} text="Môn học" />
        </Col>
        <Col style={style}>
          <CardC link={aplus} text="Bảng điểm" />
        </Col>
        <Col style={style}>
          <CardC link={agenda} text="Thời khóa biểu" />
        </Col>
        <Col style={style}>
          <CardC link={male} text="Cá nhân" />
        </Col>
      </Row>
    </div>
  );
}

export default App;