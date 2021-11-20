import React from "react";
import { Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function NewQuestion(props) {
  return (
    <div style={{ margin: "0 auto 0 auto" }}>
      <Tooltip title="Thêm câu hỏi">
        <Button
          type="default"
          shape="circle"
          icon={<PlusOutlined />}
          onClick={props.onAddQuestion}
        />
      </Tooltip>
    </div>
  );
}

export default NewQuestion;
