import React from "react";
import "antd/dist/antd.css";
import { Table, Modal, Input } from "antd";
import { EditOutlined } from "@ant-design/icons";
import Navb from './navbarqld'
import { useState } from "react";

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
            name: 'Nguyễn Văn Biển',
            code: '1911789',
            p15: '10',
            p45: '10',
            gk: '9',
            ck: '8',
        }
    ]);

    const columns = [
        {
            title: 'Stt',
            dataIndex: 'id',
            key: '1',
            align: 'center',
        },
        {
            title: 'Tên',
            dataIndex: 'name',
            key: '2',
            align: 'center',
        },
        {
            title: 'Mã số',
            dataIndex: 'code',
            key: '3',
            align: 'center'
        },
        {
            title: '15p',
            dataIndex: 'p15',
            key: '4',
            align: 'center'
            },
        {
            title: '45p',
            dataIndex: 'p45',
            key: '5',
            align: 'center'
        },
        {
            title: 'Giữa kỳ',
            dataIndex: 'gk',
            key: '6',
            align: 'center'
        },
        {
            title: 'Cuối kỳ',
            dataIndex: 'ck',
            key: '7',
            align: 'center'
        },
        {
            title: 'Thay đổi điểm',
            key: '8',
            align: 'center',
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
            <Navb />
            <div style={{
                borderRadius: '8px',
                display: 'block',
                width: 700,
                padding: 15,
                backgroundColor: 'SteelBlue',
                marginTop: '30px',
                marginLeft: '200px',
                width: "950px",
                height: "300px",
                borderColor: "#1F468B",
                boxShadow: "5px 8px 24px 5px rgba(210, 210, 210, 0.6)",
            }}>
                <Table 
                    dataSource={dataSource} 
                    columns={columns} 
                    bordered='true'
                    style={{
                        borderRadius: '8px',
                        marginTop: '40px',
                        marginLeft: '60px',
                        marginRight: '60px',
                    }}
                    
                />;
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
                {"Gk:"} <Input
                    value={editingStudent?.gk}
                    style={{width: '420px', marginLeft: '16px'}}
                    onChange={(e) => {
                        setEditingStudent(pre => {
                            return {...pre, gk:e.target.value}
                        });
                    }}
                />
                {"Ck:"} <Input
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