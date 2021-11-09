import React from "react";
import { Input } from "antd";
import "antd/dist/antd.css";
import "./create_text_question.css";
import ToolContainer from "../components/tool_container";

function CrTextQuestion() {
  const { TextArea } = Input;
  return (
    <div>
      <div className="create-question">
        <div className="question-container">
          <TextArea
            rows="5"
            placeholder="Nội dung câu hỏi"
            style={{
              backgroundColor: "rgba(250, 238, 238, 0.856)",
              borderRadius: "10px",
              resize: "none",
            }}
          />
        </div>
        <ToolContainer></ToolContainer>
      </div>
    </div>
  );
}
export default CrTextQuestion;
