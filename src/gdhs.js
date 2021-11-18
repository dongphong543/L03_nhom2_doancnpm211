import CardC from "./Card";
import Navbar from "./navbar";
// import Gdhsnav from "./gdhsnav";
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
  marginLeft: "22vh",
  marginRight: "-17vh",
};

const App = () => {
  return (
    <div className="App">
      <Navbar 
        pageName="Steasy!"
        intro="Từ nay việc học trở nên dễ dàng và ngăn nắp hơn bao giờ hết"
        background={student}
        />
      
      {/* <hr
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
      /> */}
      <Row>
        <Col style={style}>
          <Link to="/subject">
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
          <Link to="/timetable">
            <CardC link={agenda} text="Thời khóa biểu" />
          </Link>
        </Col>
        <Col style={style}>
          <Link to="/info">
            <CardC link={male} text="Cá nhân" />
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default App;
