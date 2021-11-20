import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import "./create_text_question.css";

function CrTextQuestion() {
  const { TextArea } = Input;
  return (
    <div>
      <div className="create-question">
        <div className="question-container">
          <TextArea
            rows="5"
            placeholder="Nội dung câu hỏi ..."
            style={{
              borderRadius: "5px",
              resize: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default CrTextQuestion;
