import CardC from "./Card";
import Navbar from "./navbar";

import { Link } from "react-router-dom"; // v6

import { Row, Col } from "antd";
import agenda from "./assets/icon_agenda.png";
import board from "./assets/icon_board.png";
import female from "./assets/icon_female.png";
import plus from "./assets/icon_plus.png";
import students from "./assets/icon_students.png";
import teacher from "./assets/tea_backgr.png";

const style = {
  marginTop: "5vh",
  marginLeft: "22vh",
  marginRight: "-17vh",
};

const App = () => {
  return (
    <div className="App">
      <Navbar 
        pageName="Steasy!"
        intro="Từ nay việc dạy học trở nên gần gũi và hiệu quả hơn bao giờ hết"
        background={teacher}
      />
      <Row>
        <Col style={style}>
          <Link to="/class">
            <CardC link={board} text="Lớp học" />{" "}
          </Link>
        </Col>
        <Col style={style}>
          <Link to="/classManage">
            <CardC link={plus} text="Tạo lớp học" />
          </Link>
        </Col>
        <Col style={style}>
          <Link to="/classManage">
            <CardC link={students} text="Quản lý lớp học" />
          </Link>
        </Col>
        <Col style={style}>
          <Link to="/timetable">
            <CardC link={agenda} text="Lịch dạy học" />
          </Link>
        </Col>
        <Col style={style}>
          <Link to="/info">
            <CardC link={female} text="Cá nhân" />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default App;
