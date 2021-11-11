import React from "react";
import { Button, Tooltip } from "antd";
import { PlusOutlined } from "@ant-design/icons";

function NewQuestion() {
  return (
    <div style={{ width: "80%", margin: "0 auto 0 auto" }}>
      <Tooltip title="Thêm">
        <Button type="default" shape="circle" icon={<PlusOutlined />} />
      </Tooltip>
    </div>
  );
}

export default NewQuestion;
