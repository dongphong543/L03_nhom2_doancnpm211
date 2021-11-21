import React from "react";
import "./tool_container.css";
import { Button, Tooltip } from "antd";
import "antd/dist/antd.css";
import { DeleteOutlined } from "@ant-design/icons";

function ToolContainer(props) {
  const changeTypeHandler = (event) => {
    props.onChangeType(props.toolID, event.target.value);
  };

  return (
    <div
      className="tool-container"
      style={{ backgroundColor: "#dad6e0de", borderRadius: "5px" }}
    >
      <select
        name="questionType"
        value={props.selectedValue}
        onChange={changeTypeHandler}
        style={{ backgroundColor: "rgba(0,0,0,0)", border: "none" }}
      >
        <option value="TL">Tự luận</option>
        <option value="TN">Trắc nghiệm</option>
        <option value="MT">Nhiều đáp án</option>
      </select>
      <Tooltip title="Xóa câu hỏi">
        <Button
          type="ghost"
          shape="circle"
          icon={<DeleteOutlined />}
          onClick={props.onClickDelete}
          style={{ border: "none", margin: "0 10px", color: "red" }}
        />
      </Tooltip>
    </div>
  );
}

export default ToolContainer;
