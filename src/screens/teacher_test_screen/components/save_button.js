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
        size="large"
        style={{
          backgroundColor: "#1f468b",
          border: "#1f468b",
          borderRadius: "8px",
          color: "white",
        }}
        onClick={() => alert("Tạo bài kiểm tra thành công")}
      >
        Lưu
      </Button>
    </div>
  );
}

export default SaveButton;
