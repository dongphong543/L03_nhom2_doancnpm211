import React from "react";
import "./tool_container.css";
import { Button, Tooltip, Select, Input } from "antd";
import "antd/dist/antd.css";
import {
  DeleteOutlined,
  CopyOutlined,
  EditOutlined,
  SaveOutlined,
} from "@ant-design/icons";

function ToolContainer() {
  const { Option } = Select;
  const { TextArea } = Input;
  return (
    <div className="tool-container">
      <Select
        defaultValue="Tự luận"
        style={{
          width: "140px",
          backgroundColor: "rgba(0, 0, 0, 0)",
          boxShadow: "none",
        }}
        bordered={false}
        className="tool select"
      >
        <Option value="TL">Tự luận</Option>
        <Option value="TN">Trắc nghiệm</Option>
        <Option value="MT">Nhiều lựa chọn</Option>
      </Select>
      <Tooltip title="Chỉnh sửa">
        <Button
          type="ghost"
          shape="circle"
          icon={<EditOutlined />}
          className="tool"
        />
      </Tooltip>
      <Tooltip title="Sao chép">
        <Button
          type="ghost"
          shape="circle"
          icon={<CopyOutlined />}
          className="tool"
        />
      </Tooltip>
      <Tooltip title="Lưu">
        <Button
          type="ghost"
          shape="circle"
          icon={<SaveOutlined />}
          className="tool"
        />
      </Tooltip>
      <Tooltip title="Xóa">
        <Button
          type="ghost"
          shape="circle"
          icon={<DeleteOutlined />}
          className="tool"
        />
      </Tooltip>
    </div>
  );
}

export default ToolContainer;
