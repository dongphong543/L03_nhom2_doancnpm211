import "antd/dist/antd.css";
import "./multiple_choice_question.css";
import React from "react";
import { Checkbox, Row } from "antd";

function MultiChoiceQuestion() {
  const plainOptions = [
    "Câu trả lời 1",
    "Câu trả lời 2",
    "Câu trả lời 3",
    "Câu trả lời 4",
  ];
  return (
    <div className="multichoice-question-container">
      <div>
        <span className="multichoice-question-number">{"Câu 3: "}</span>
        <span className="multichoice-question">{"Nội dung câu hỏi"}</span>
      </div>
      <div className="multichoice-answer-container">
        <Checkbox.Group className="answer">
          <Row>
            <Checkbox value="A">{plainOptions[0]}</Checkbox>
          </Row>
          <Row>
            <Checkbox value="B">{plainOptions[1]}</Checkbox>
          </Row>
          <Row>
            <Checkbox value="C">{plainOptions[2]}</Checkbox>
          </Row>
          <Row>
            <Checkbox value="D">{plainOptions[3]}</Checkbox>
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
}

export default MultiChoiceQuestion;
