import React from "react";
import { Row, Col, Badge, Menu, Dropdown, message } from "antd";

import sletter from "./assets/S_letter.png";
import bluebar from "./assets/blue_bar.png";
import redbar from "./assets/red_bar.png";
import teacher from "./assets/tea_backgr.png";
import {
  FileDoneOutlined,
  UserOutlined,
  CloseOutlined,
  CaretDownOutlined,
  BellFilled,
} from "@ant-design/icons";
import Nav from "./navbar";

const App = () => (
  <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
    <Nav />
    <div
      style={{
        marginLeft: "10vw",
        marginTop: "8vh",
      }}
    >
      <b style={{ fontSize: "45px", position: "relative", zIndex: "3" }}>
        Steasy!
      </b>
      <br />
      <div style={{ fontSize: "22px", position: "relative", zIndex: "3" }}>
        Từ nay việc dạy học trở nên gần gũi và hiệu quả hơn bao giờ hết
      </div>
    </div>
    <img
      className="ttb"
      src={teacher}
      style={{
        marginTop: "-37vh",
        marginBottom: "-10vh",
        maxHeight: "60vh",
        overflowX: "hidden",
        overflowY: "hidden",
        zIndex: "1",
      }}
    />
  </div>
);

export default App;
