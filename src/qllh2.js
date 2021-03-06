import React from "react";
import { Row, Button, Menu, List } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Navb from './navbar'
import board from "./assets/icon_board.png";
import { useState } from "react";

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

function App () {
    const [dataSource, setDataSource] = useState([
        {
            name: 'Đinh Thị Quang',
            code: '1511781',
            id: 1
        },
        {
            name: 'Phan Văn B',
            code: '1511782',
            id: 2
        },
        {
            name: 'Phan Văn C',
            code: '1511783',
            id: 3
        },
        {
            name: 'Phan Văn D',
            code: '1511784',
            id: 4
        },
        {
            name: 'Phan Văn E',
            code: '1511785',
            id: 5
        },
        {
            name: 'Phan Văn F',
            code: '1511786',
            id: 6
        },
        {
            name: 'Phan Văn G',
            code: '1511787',
            id: 7
        },
    ]);
    return(
        <div>
            <Navb pageName="Quản lý lớp học" 
                path={board}
                checkStu={false}/>
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
                    }}
                    mode='inline'
                    expandIcon={<CaretDownOutlined style={styleIcon}/>}
                >
                    <SubMenu 
                        title='NH 2021 - 2022 - Toán 11 - Nguyễn Văn A - Lớp 11A7'
                    >
                        <Link to="/classmanage1"><Menu.Item style={style}>NH 2021 - 2022 - Toán 11 - Nguyễn Văn A - Lớp 11A1</Menu.Item></Link>
                        <Link to="/classmanage3"><Menu.Item style={style}>NH 2021 - 2022 - Toán 11 - Nguyễn Văn A - Lớp 11A3</Menu.Item></Link>
                        <Link to="/createclass"><Menu.Item style={styleAdd}><b>Thêm lớp học</b></Menu.Item></Link>
                    </SubMenu>
                </Menu>
            </Row>
            <Row>
            <Link to="/markmanage7">
                <Button
                    style={{
                        borderRadius: "8px",
                        backgroundColor: "#1F468B",
                        borderColor: "#1F468B",
                        height: "45px",
                        width: "200px",
                        marginTop: "20px",
                        marginLeft: "10vw",
                    }}
                    size="large"
                    type="primary"
                >
                    Bảng điểm
                </Button>
            </Link>
            </Row>
            <Row>
                <div style={{
                    zIndex: '1',
                    width: "80vw",
                    marginTop: "30px",
                    marginLeft: "10vw",
                    height: "500px",
                }}>
                    <b style={{ fontSize: "25px", color: "#1F468B" }}>Danh sách học sinh</b> <br />
                    <List
                        style={{
                            fontSize: "17px"
                        }}
                        split='true'
                        bordered={true}
                        dataSource={dataSource}
                        renderItem={item => (   
                            <List.Item
                                extra={
                                <List>
                                    <Button style={styleButton1} onClick={() => { 
                                        setDataSource(dataSource => 
                                            dataSource.filter((data) => data.id !== item.id)
                                        );
                                    }}>
                                        Kick
                                    </Button>
                                    <Button style={styleButton2} onClick={() => { 
                                        setDataSource(dataSource => 
                                            dataSource.filter((data) => data.id !== item.id)
                                        );
                                    }}>
                                        Ban
                                    </Button>
                                </List>
                                }
                            >
                                {item.name + " - " + item.code}
                            </List.Item>
                        )}
                    />
                </div>
            </Row>
        </div>
    );
}

export default App;