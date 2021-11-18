import "antd/dist/antd.css";
import "./multiple_choice_question.css";
import React from "react";
import { Checkbox, Row } from "antd";

function MultiChoiceQuestion() {
  const plainOptions = ["Trung Quốc", "Lào", "Campuchia", "Thái Lan"];
  return (
    <div className="multichoice-question-container">
      <div className="multichoice-question-holder">
        <span className="multichoice-question-number">{"Câu 3 (1đ): "}</span>
        <span className="multichoice-question">
          {
            "Nước ta có hơn 4600 km đường biên giới trên đất liền, giáp với các nước"
          }
        </span>
      </div>
      <div className="multichoice-answer-container">
        <Checkbox.Group className="multichoice-answer">
          <Row>
            <Checkbox value="A" style={{ fontSize: "20px" }}>
              {plainOptions[0]}
            </Checkbox>
          </Row>
          <Row>
            <Checkbox value="B" style={{ fontSize: "20px" }}>
              {plainOptions[1]}
            </Checkbox>
          </Row>
          <Row>
            <Checkbox value="C" style={{ fontSize: "20px" }}>
              {plainOptions[2]}
            </Checkbox>
          </Row>
          <Row>
            <Checkbox value="D" style={{ fontSize: "20px" }}>
              {plainOptions[3]}
            </Checkbox>
          </Row>
        </Checkbox.Group>
      </div>
    </div>
  );
}

export default MultiChoiceQuestion;
