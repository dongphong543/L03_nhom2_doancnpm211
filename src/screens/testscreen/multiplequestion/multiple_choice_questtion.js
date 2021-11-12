import "antd/dist/antd.css";
import "./multiple_choice_question.css";
import React from "react";
import { Checkbox, Row } from "antd";

function MultiChoiceQuestion() {
  const plainOptions = [
    "Trung Quốc",
    "Lào",
    "Campuchia",
    "Thái Lan",
  ];
  return (
    <div className="multichoice-question-container">
      <div>
        <span className="multichoice-question-number">{"Câu 3: "}</span>
        <span className="multichoice-question">{"Nước ta có hơn 4600 km đường biên giới trên đất liền, giáp với các nước"}</span>
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
