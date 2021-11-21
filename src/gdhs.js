import CardC from "./Card";
import Navbar from "./navbar";

import { Link } from "react-router-dom"; // v6

import { Row, Col } from "antd";
import agenda from "./assets/icon_agenda.png";
import aplus from "./assets/icon_aplus.png";
import board from "./assets/icon_board.png";
import plus from "./assets/icon_plus.png";
import male from "./assets/icon_male.png";
import student from "./assets/stu_backgr.jpg";

const style = {
  marginTop: "5vh",
  marginLeft: "9.5vw",
  marginRight: "-6vw",
};

const App = () => {
  return (
    <div className="App">
      <Navbar 
        pageName="Steasy!"
        intro="Từ nay việc học trở nên dễ dàng và ngăn nắp hơn bao giờ hết"
        background={student}
        checkStu={true}
      />
      
      <Row>
        <Col style={{
          marginLeft: "9.5vw",
          marginTop: "5vh",
          marginRight: "-6vw",
        }}>
          <Link to="/studentsubject">
            <CardC link={board} text="Môn học" />
          </Link>
        </Col>
        <Col style={style}>
          <Link to="/joinclass">
            <CardC link={plus} text="Tham gia lớp học" />
          </Link>
        </Col>
        <Col style={style}>
          <Link to="/ptstable">
            <CardC link={aplus} text="Bảng điểm" />{" "}
          </Link>
        </Col>
        <Col style={style}>
          <Link to="/stutimetable">
            <CardC link={agenda} text="Thời khóa biểu" />
          </Link>
        </Col>
        <Col style={{
          marginLeft: "9.5vw",
          marginTop: "5vh",
          marginRight: "9vw", 
        }}>
          <Link to="/stuinfo">
            <CardC link={male} text="Cá nhân" />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default App;
