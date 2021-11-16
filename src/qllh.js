import React from "react";
import { Row, Button, Menu, List } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Navb from './navbar'
import board from "./assets/icon_board.png";
const { SubMenu } = Menu;

const style = {
    borderRadius: '8px',
    textAlign: 'center',
    color: 'Black',
    backgroundColor: "#f4f4f4",
    position: "relative",
    zIndex: '2'
};

const styleAdd = {
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: "#23A859",
    zIndex: '2'
};

const styleIcon = {
    borderRadius: '8px',
    color: 'white', 
    fontSize: '25px',
    marginLeft: '-20px'
};

const styleButton1 = {
    borderRadius: '8px',
    backgroundColor: 'DarkOrange', 
    marginRight: '7px',
    height: '37px',
    color: 'white'
};

const styleButton2 = {
    borderRadius: '8px',
    backgroundColor: '#F01836', 
    height: '37px',
    color: 'white'
};

const App = () => (
    <div>
        <Navb />
        <div
        style={{
          marginLeft: "10vw",
          marginTop: "5vh",
        }}
      >
        <b style={{ fontSize: "40px" }}>Quản lý lớp học</b>
        <br />
      </div>
      <img
        src={board}
        style={{
          marginLeft: "70vw",
          marginTop: "-170px",
          height: "210px",
        }}
      />
      <hr
        style={{
          // marginTop: "vh",
          backgroundColor: "#eee",
          height: 0.05,
          width: "auto",
          borderColor: "transparent",
          boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
        }}
      />
        <Row>
            <Menu 
                style={{
                    //zIndex: '2',
                    borderRadius: '8px',
                    backgroundColor: "#1F468B",
                    borderColor: "#1F468B",
                    height: "45px",
                    marginTop: "40px",
                    marginLeft: '10vw',
                    width: "80vw",
                    color: 'white',
                    textAlign: 'center',
                    fontSize: "15px",
                    // fontWeight: 'bold',
                    // marginRight: 'auto',
                }}
                mode='inline'
                expandIcon={<CaretDownOutlined style={styleIcon}/>}
                onClick={() => alert("You clicked")}
            >
                <SubMenu 
                    title="829717313 - Toán 11 - Nguyễn Thị A"
                >
                    <Menu.Item style={style}>0123456789 - Thể dục 12 - Đinh Văn B</Menu.Item>
                    <Menu.Item style={style}>9876543210 - Lịch sử 10 - Trần Văn C</Menu.Item>
                    <Menu.Item style={styleAdd}><b>Thêm lớp học</b></Menu.Item>
                </SubMenu>
            </Menu>
        </Row>
        <Row>
        <Button
          style={{
            // borderRadius: "8px",
            backgroundColor: "#1F468B",
            borderColor: "#1F468B",
            height: "45px",
            width: "200px",
            marginTop: "20px",
            marginLeft: "10vw",
          }}
          size="large"
          type="primary"
          onClick={() => alert("You pressed")}
        >
                Bảng điểm
            </Button>
        </Row>
        <Row>
            <div style={{
                zIndex: '1',
                display: 'block',
                width: "80vw",
                // padding: 15,
                // backgroundColor: 'SteelBlue',
                marginTop: "30px",
                marginLeft: "10vw",
                height: "500px",
                // borderColor: "#1F468B",
                // boxShadow: "5px 8px 24px 5px rgba(210, 210, 210, 0.6)",
            }}>
                <b style={{ fontSize: "25px", color: "#1F468B" }}>Danh sách học sinh</b> <br />
                <List
                    style={{
                        // color: 'green',
                        // backgroundColor: '#f4f4f4',
                        // height: "50px",
                        // borderColor: "black",
                        fontSize: "17px"
                    }}
                    split='true'
                    bordered
                    dataSource={[
                        'Nguyễn Văn A - 15337890',
                        'Nguyễn Văn B - 15337891',
                        'Nguyễn Văn C - 15337892',
                        'Nguyễn Văn D - 15337893',
                        'Nguyễn Văn E - 15337894',
                        'Nguyễn Văn F - 15337895',
                        'Nguyễn Văn G - 15337896',
                    ]}
                    renderItem={item => (   
                    <List.Item
                        extra={
                        <List>
                            <Button style={styleButton1} onClick={() => alert("You kicked")}>Kick</Button>
                            <Button style={styleButton2} onClick={() => alert("You baned")}>Ban</Button>
                        </List>
                        }
                    >
                        {item}
                    </List.Item>
                    )}
                />
            </div>
        </Row>
    </div>
);

export default App;