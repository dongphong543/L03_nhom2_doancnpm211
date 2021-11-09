import React, { useState } from 'react';
import ScreenHeader from "../components/screen_header";
import { Table, Input, Popconfirm, Form, Typography, Select, Button } from 'antd';
const originData = [];

for (let i = 0; i < 40; i++) {
    originData.push({
        key: i.toString(),
        stuID: `${i + 1}`,
        stuName: `Student ${i + 1}`,
        g151: 9,
        g451: 9,
        gck1: 9,
        gsk: 9,
        g152: 9,
        g452: 9,
        gck2: 9,
        gtk: 9,
    });
}

const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = <Input />;
    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{
                        margin: 0,
                    }}
                    rules={[
                        {
                            required: true,
                            message: `Please Input ${title}!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const EditableTable = () => {
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');

    const isEditing = (record) => record.key === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            name: '',
            stuName: '',
            g151: '',
            g451: '',
            gck1: '',
            gsk: '',
            g152: '',
            g453: '',
            gck2: '',
            gtk: '',
            ...record,
        });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };

    const save = async (key) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => key === item.key);

            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, { ...item, ...row });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Mã số',
            dataIndex: 'stuID',
            width: '10%',
            editable: true,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'stuName',
            width: '25%',
            editable: true,
        },
        {
            title: '15\'',
            dataIndex: 'g151',
            width: '10%',
            editable: true,
        },
        {
            title: '45\'',
            dataIndex: 'g451',
            width: '10%',
            editable: true,
        },
        {
            title: 'CK1',
            dataIndex: 'gck1',
            width: '10%',
            editable: true,
        },
        {
            title: 'S.Kết',
            dataIndex: 'gsk',
            width: '10%',
            editable: true,
        },
        {
            title: '15\'',
            dataIndex: 'g152',
            width: '10%',
            editable: true,
        },
        {
            title: '45\'',
            dataIndex: 'g452',
            width: '10%',
            editable: true,
        },
        {
            title: 'CK2',
            dataIndex: 'gck2',
            width: '10%',
            editable: true,
        },
        {
            title: 'T.Kết',
            dataIndex: 'gtk',
            width: '10%',
            editable: true,
        },
        {
            title: '',
            dataIndex: 'operation',
            render: (_, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <a
                            href="javascript:;"
                            onClick={() => save(record.key)}
                            style={{
                                marginRight: 8,
                            }}
                        >
                            Lưu
                        </a>
                        <Popconfirm
                            title="Bạn muốn hủy?"
                            okText='Có'
                            cancelText='Không'
                            onConfirm={cancel}>
                            <a>Hủy</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                        Chỉnh sửa
                    </Typography.Link>
                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }

        return {
            ...col,
            onCell: (record) => ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });
    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
        </Form>
    );
};

function TeaMarkScreen() {
    const { Option } = Select;
    return (
        <div style={{ overflowX: 'hidden' }}>
            <ScreenHeader name='Chỉnh Sửa Điểm'></ScreenHeader>
            <div style={{
                backgroundColor: 'red',
                width: '80%',
                margin: '0px auto',
                padding: '10px'
            }}>
                <Select defaultValue='Chọn lớp' style={{
                    width: '130px',
                    float: 'right',
                    marginBottom: '10px'
                }}>
                    <Option value='Chọn lớp'>-- Chọn lớp --</Option>
                    <Option value='L8A1'>Lớp 8A1</Option>
                    <Option value='L8A2'>Lớp 8A2</Option>
                </Select>
                <EditableTable />
            </div>
            <div style={{ width: '100%', padding: '10px 50%' }}>
                <Button
                    type='primary'
                    size='large'
                    onClick={() => { alert('Lưu thành công') }} >
                    {'Lưu'}
                </Button>
            </div>
        </div>
    );
}

export default TeaMarkScreen;