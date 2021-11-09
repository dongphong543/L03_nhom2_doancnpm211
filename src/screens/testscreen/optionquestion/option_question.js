import "./option_question.css";
import { Radio, Row } from "antd";
import "antd/dist/antd.css";
import React from "react";

function OptionQuestion() {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="option-question-container">
      <div>
        <span className="option-question-number">{"Câu 2: "}</span>
        <span className="option-question">{"Nội dung câu hỏi"}</span>
      </div>
      <div className="option-answer-container">
        <Radio.Group
          onChange={onChange}
          value={value}
          size="large"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            paddingLeft: "10px",
          }}
        >
          <Row>
            <Radio value={1}>Câu trả lời 1</Radio>
          </Row>
          <Row>
            <Radio value={2}>Câu trả lời 2</Radio>
          </Row>
          <Row>
            <Radio value={3}>Câu trả lời 3</Radio>
          </Row>
          <Row>
            <Radio value={4}>Câu trả lời 4</Radio>
          </Row>
        </Radio.Group>
      </div>
    </div>
  );
}

export default OptionQuestion;
