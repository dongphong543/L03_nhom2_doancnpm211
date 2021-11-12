import React from "react";
import "./text_question.css";
import { Input } from "antd";
function TextQuestion() {
  const { TextArea } = Input;
  return (
    <div className="text-question-container">
      <div>
        <span className="text-question-number">{"Câu 1: "}</span>
        <span className="text-question">{"Cho biết gió bắt đầu từ đâu?"}</span>
      </div>
      <TextArea
        rows="5"
        placeholder="Nhập câu trả lời"
        style={{
          backgroundColor: "rgba(250, 238, 238, 0.856)",
          borderRadius: "10px",
          resize: "none",
        }}
      />
    </div>
  );
}

export default TextQuestion;
