import React from "react";
import {  Button, Input } from "antd";
import "./App.css";
import join from "./assets/icon_plus.png";
import Nav from "./navbar"

const join_class = () => {
    return (
        <div>
            <Nav />
            <div style={{ 
                marginLeft: "10vw",
                marginTop: "7vh",
            }}>  
            <b style={{ fontSize: "40px" }}>
                Tham gia lớp học
            </b>  
            </div>
            <img
            src={join}
            style={{
                marginLeft: "75vw",
                marginTop: "-35vh",
                maxHeight: "40vh",
            }}
            />
            <hr
            style={{
                // marginTop: "-4vh",
                backgroundColor: "#eee",
                height: 0.05,
                width: "auto",
                borderColor: "transparent",
                boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
            }}
            />

            <div style={{
                marginTop: "10vh",
                verticalAlign: "middle",
                textAlign: "center",
                lineHeight: "30px"
            }}>
                <span style={{ color: "#1F468B", fontSize: "17px" }}>
                    Nhập mã lớp học
                </span> 
                <b style={{ color: "#F01836", fontSize: "17px" }}>*</b>
                <br/>
                <Input
                    size="large"
                    placeholder="Mã lớp học"
                    allowClear="true"
                    style={{
                        width: "40vw",
                        height: "50px",
                        borderRadius: "8px",
                        marginBottom: "10px"
                    }}
                />
                <br/>
                <span style={{ color: "#1F468B", fontSize: "17px" }}>
                    Nhập mật khẩu lớp học
                </span> 
                <br/>
                <Input.Password
                    size="large"
                    placeholder="Mật khẩu"
                    style={{ 
                        height: "50px", 
                        width: "40vw",
                        borderRadius: "8px", 
                        marginBottom: "10px"
                    }}
                />
                <br/>
                <Button
                    style={{
                        borderRadius: "8px",
                        backgroundColor: "#1F468B",
                        borderColor: "#1F468B",
                        height: "9vh",
                        marginTop: "10px",
                    }}
                    size="large"
                    type="primary"
                    onClick={() => alert("You pressed")}
                >
                    <b style={{ fontSize: "17px" }}>Tham gia</b>
                </Button>
            </div>
        </div>
    )
}

export default join_class
