import "./option_question.css";
import { Radio, Row } from "antd";
import "antd/dist/antd.css";
import React from "react";

function OptionQuestion() {
  const [value, setValue] = React.useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="option-question-container">
      <div className="option-question-holder">
        <span className="option-question-number">{"Câu 2 (1đ): "}</span>
        <span className="option-question">
          {
            "Tính thoái hóa của mã di truyền là hiện tượng nhiều bộ ba khác nhau cùng mã hóa cho một loại axit amin. Những mã di truyền nào sau đây không có tính thoái hóa?"
          }
        </span>
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
            <Radio value={1}>5’AUG3’, 5’UGG3’</Radio>
          </Row>
          <Row>
            <Radio value={2}>5’XAG3’, 5’AUG3’</Radio>
          </Row>
          <Row>
            <Radio value={3}>5’UUU3’, 5’AUG3’</Radio>
          </Row>
          <Row>
            <Radio value={4}>5’UXG3’. 5’AGX3’</Radio>
          </Row>
        </Radio.Group>
      </div>
    </div>
  );
}

export default OptionQuestion;
