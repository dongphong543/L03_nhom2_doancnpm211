import React from "react";
import "./text_question.css";
import { Input } from "antd";
function TextQuestion() {
  const { TextArea } = Input;
  return (
    <div className="text-question-container">
      <div className="text-question-holder">
        <span className="text-question-number">{"Câu 1 (1đ): "}</span>
        <span className="text-question">{"Cho biết gió bắt đầu từ đâu?"}</span>
      </div>
      <TextArea
        rows="4"
        placeholder="Nhập câu trả lời..."
        style={{
          resize: "none",
          borderRadius: "5px",
          padding: "20px",
          backgroundColor: "rgba(250, 238, 238, 0.856)",
          fontSize: "20px",
        }}
      />
    </div>
  );
}

export default TextQuestion;
