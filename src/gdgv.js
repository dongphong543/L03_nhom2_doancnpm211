import CardC from "./Card";
import Gdgvnav from "./gdgvnav";

import { Link } from "react-router-dom"; // v6

import { Row, Col } from "antd";
import agenda from "./assets/icon_agenda.png";
import board from "./assets/icon_board.png";
import female from "./assets/icon_female.png";
import plus from "./assets/icon_plus.png";
import students from "./assets/icon_students.png";

const style = {
  marginTop: "5vh",
  marginLeft: "22vh",
  marginRight: "-17vh",
};

const App = () => {
  return (
    <div className="App">
      <Gdgvnav />
      <hr
        style={{
          backgroundColor: "#eee",
          height: 0.05,
          width: "auto",
          position: "relative",
          borderColor: "transparent",
          boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
          zIndex: "2",
          marginTop: "-1px",
        }}
      />
      <Row>
        <Col style={style}>
          <Link to="/class">
            <CardC link={board} text="Lớp học" />{" "}
          </Link>
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
};

export default App;
