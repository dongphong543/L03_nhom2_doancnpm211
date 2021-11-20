import React, { useState } from "react";
import { Input, Form, Button, Tooltip } from "antd";
import "antd/dist/antd.css";
import "./create_option_question.css";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

function CrOptionQuestion() {
  const { TextArea } = Input;
  const [answers, setAnswers] = useState([
    { id: Math.floor(Math.random() * 100000 + 1) },
    { id: Math.floor(Math.random() * 100000 + 1) },
  ]);

  const addQuestionHandler = () => {
    var answer = { id: Math.floor(Math.random() * 100000 + 1) };
    setAnswers([...answers, answer]);
  };

  const removeQuestionHandler = (_id) => {
    if (answers.length > 2) setAnswers(answers.filter((e) => e.id !== _id));
  };

  return (
    <div className="create-question">
      <div className="question-container">
        <TextArea
          rows="3"
          placeholder="Nội dung câu hỏi ..."
          style={{
            borderRadius: "5px",
            resize: "none",
          }}
        />
      </div>
      <div
        className="answer-container"
        style={{
          marginTop: "10px",
          borderRadius: "5px",
        }}
      >
        <Form layout="horizontal">
          {answers.map((e) => {
            return (
              <Form.Item
                label={
                  "Đáp án: " + (answers.findIndex((ele) => ele.id === e.id) + 1)
                }
                key={e.id}
              >
                <div style={{ display: "flex" }}>
                  <Input placeholder="Nội dung đáp án ..." />
                  <Button
                    type="ghost"
                    shape="circle"
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      removeQuestionHandler(e.id);
                    }}
                    style={{ border: "none", margin: "0 10px" }}
                  />
                </div>
              </Form.Item>
            );
          })}
          <Form.Item style={{ marginBottom: "0" }}>
            <Button
              type="defaulf"
              shape="circle"
              icon={<PlusOutlined />}
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
              onClick={addQuestionHandler}
            ></Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default CrOptionQuestion;
