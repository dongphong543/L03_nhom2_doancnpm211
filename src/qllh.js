import React from "react";
import { Row, Button, Menu, List } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Navb from './navbarqllh'
const { SubMenu } = Menu;

const style = {
    borderRadius: '8px',
    textAlign: 'center',
    color: 'white',
    backgroundColor: "RoyalBlue",
    position: "relative",
    zIndex: '2'
};

const styleAdd = {
    borderRadius: '8px',
    textAlign: 'center',
    color: 'black',
    backgroundColor: "LimeGreen",
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
        <Row>
            <Menu 
                style={{
                    borderRadius: '8px',
                    backgroundColor: "SteelBlue",
                    borderColor: "#1F468B",
                    width: "950px",
                    height: "50px",
                    marginTop: "40px",
                    marginLeft: '200px',
                    color: 'white',
                    textAlign: 'center',
                    theme: 'dark',
                    fontWeight: 'bold',
                    //marginRight: 'auto',
                }}
                mode='inline'
                expandIcon={<CaretDownOutlined style={styleIcon}/>}
                onClick={() => alert("You clicked")}
            >
                <SubMenu 
                    title="6996699669 - GDCD 12 - Huấn Hoa Hòe"
                    style = {{borderRadius: '8px',}}
                >
                    <Menu.Item style={style}>0123456789 - Thể dục 12 - Nguyễn Hữu Đa</Menu.Item>
                    <Menu.Item style={style}>9876543210 - Lịch sử 10 - Nguyễn Văn Biển</Menu.Item>
                    <Menu.Item style={styleAdd}><b>Thêm lớp học</b></Menu.Item>
                </SubMenu>
            </Menu>
        </Row>
        <Row>
            <Button
                type='primary'
                size='middle'
                style={{
                    textAlign: 'center',
                    color: 'white',
                    backgroundColor: "SteelBlue",
                    marginTop: "30px",
                    marginLeft: '200px',
                    width: "270px",
                    height: "50px",
                    position: "relative",
                    zIndex: '1',
                }}
                onClick={() => alert("You clicked")}
            >
                Bảng điểm
            </Button>
        </Row>
        <Row>
            <div style={{
                borderRadius: '8px',
                display: 'block',
                width: 700,
                padding: 15,
                backgroundColor: 'SteelBlue',
                marginTop: '30px',
                marginLeft: '200px',
                width: "950px",
                height: "500px",
                borderColor: "#1F468B",
                boxShadow: "5px 8px 24px 5px rgba(210, 210, 210, 0.6)",
            }}>
                <h3 style={{color: 'white'}}>Danh sách học sinh</h3>
                <List
                    style={{
                        borderRadius: '8px',
                        color: 'green',
                        backgroundColor: 'gold'
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
                            <Button style={styleButton1} onClick={() => alert("You kicked")}>kick</Button>
                            <Button style={styleButton2} onClick={() => alert("You baned")}>ban</Button>
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