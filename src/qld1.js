import React from "react";
import "antd/dist/antd.css";
import { Table, Modal, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Navbar from './navbar'
import { useState } from "react";
import plus from "./assets/icon_aplus.png";

function App () {
    const [isEditing, setIsEditing] = useState(false)
    const [editingStudent, setEditingStudent] = useState(null)
    const [dataSource, setDataSource] = useState([
        {
            id: '1',
            name: 'Đinh Gia Quang',
            code: '1911900',
            p15: '10',
            p45: '10',
            gk: '10',
            ck: '10',
        },
        {
            id: '2',
            name: 'Trần Văn B',
            code: '1522782',
            p15: '10',
            p45: '10',
            gk: '9',
            ck: '8',
        },
        {
            id: '3',
            name: 'Trần Văn C',
            code: '1522783',
            p15: '10',
            p45: '7',
            gk: '5',
            ck: '9',
        },
        {
            id: '4',
            name: 'Trần Văn D',
            code: '1522784',
            p15: '8',
            p45: '7',
            gk: '10',
            ck: '7',
        },
        {
            id: '5',
            name: 'Trần Văn E',
            code: '1522785',
            p15: '8',
            p45: '7',
            gk: '8',
            ck: '9',
        },
        {
            id: '6',
            name: 'Trần Văn F',
            code: '1522786',
            p15: '6',
            p45: '7',
            gk: '7',
            ck: '6',
        },
        {
            id: '7',
            name: 'Trần Văn G',
            code: '1522787',
            p15: '10',
            p45: '10',
            gk: '10',
            ck: '10',
        },
    ]);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: '1',
            align: 'center',
            width: '5vw'
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: '2',
            align: 'center',
            width: '20vw'
        },
        {
            title: 'Mã số',
            dataIndex: 'code',
            key: '3',
            align: 'center',
            width: '12vw'
        },
        {
            title: '15p',
            dataIndex: 'p15',
            key: '4',
            align: 'center',
            width: '7vw'
        },
        {
            title: '45p',
            dataIndex: 'p45',
            key: '5',
            align: 'center',
            width: '7vw'
        },
        {
            title: 'Giữa kỳ',
            dataIndex: 'gk',
            key: '6',
            align: 'center',
            width: '7vw'
        },
        {
            title: 'Cuối kỳ',
            dataIndex: 'ck',
            key: '7',
            align: 'center',
            width: '7vw'
        },
        {
            title: 'Thay đổi điểm',
            key: '8',
            align: 'center',
            width: '17vw',
            render: (record) => {
                return (
                    <>
                        <EditOutlined onClick={()=>{
                            onEditStudent(record);
                        }}/>
                    </>
                );
            },
        },
    ];

    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({...record});
    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };

    return (
        <div>
            <Navbar
                pageName="Quản lý điểm" 
                roomName="NH 2021 - 2022 - Toán 11 - Nguyễn Văn A - Lớp 12A3" 
                path={plus} 
                checkStu={false}
            />
            <div style={{
                width: "70vw",
                marginTop: '1vw',
                marginLeft: '10vw',
                marginRight: '10vw',
                height: "25vw",
                borderColor: "#1F468B",
            }}>
                <Table 
                    tableLayout="fixed"
                    size="small"
                    dataSource={dataSource} 
                    columns={columns} 
                    bordered={false}
                    style={{
                    }}
                />
            </div>
            <Modal
                title='Thay đổi điểm'
                visible={isEditing}
                okText='Lưu'
                cancelText='Hủy'
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    setDataSource(pre => {
                        return pre.map(student=>{
                            if(student.id === editingStudent.id) {
                                return editingStudent;
                            } else {
                                return student;
                            }
                        })
                    });
                    resetEditing();
                }}
            >
                <h4>{editingStudent?.name} - {editingStudent?.code}</h4>
                {"15p:"} <Input
                    value={editingStudent?.p15}
                    style={{width: '420px', marginLeft: '10px'}}
                    onChange={(e) => {
                        setEditingStudent(pre => {
                            return {...pre, p15:e.target.value}
                        });
                    }}
                />
                
                {"45p:"} <Input
                    value={editingStudent?.p45}
                    style={{width: '420px', marginLeft: '10px'}}
                    onChange={(e) => {
                        setEditingStudent(pre => {
                            return {...pre, p45:e.target.value}
                        });
                    }}
                />
                {"GK:"} <Input
                    value={editingStudent?.gk}
                    style={{width: '420px', marginLeft: '16px'}}
                    onChange={(e) => {
                        setEditingStudent(pre => {
                            return {...pre, gk:e.target.value}
                        });
                    }}
                />
                {"CK:"} <Input
                    value={editingStudent?.ck}
                    style={{width: '420px', marginLeft: '16px'}}
                    onChange={(e) => {
                        setEditingStudent(pre => {
                            return {...pre, ck:e.target.value}
                        });
                    }}
                />
            </Modal>
        </div>
    );
}

export default App