import React from "react";
import { Button } from "antd";

function SaveButton() {
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Button
        type="primary"
        size="large"
        style={{
          backgroundColor: "#1f468b",
          border: '#1f468b',
          borderRadius: '8px'
        }}
      >
        Lưu
      </Button>
    </div>
  );
}

export default SaveButton;
