import React from "react";
import ToolContainer from "../components/tool_container";
import NewQuestion from "../components/new_question";
import { Input, Form, Button } from "antd";
import "antd/dist/antd.css";
import "./create_option_question.css";
import { PlusOutlined } from "@ant-design/icons";

function CrOptionQuestion() {
  const { TextArea } = Input;
  return (
    <div>
      <div className="create-question">
        <div className="question-container">
          <TextArea
            rows="1"
            placeholder="Nội dung câu hỏi"
            style={{
              backgroundColor: "rgba(250, 238, 238, 0.856)",
              borderRadius: "10px",
              resize: "none",
            }}
          />
        </div>
        <div
          className="answer-container"
          style={{
            marginTop: "20px",
            backgroundColor: "rgba(250, 238, 238, 0.856)",
            padding: "20px 10px",
            borderRadius: "10px",
          }}
        >
          <Form layout="horizontal">
            <Form.Item label="A">
              <Input placeholder="Nội dung đáp án" />
            </Form.Item>
            <Form.Item label="B">
              <Input placeholder="Nội dung đáp án" />
            </Form.Item>
            <Form.Item style={{ marginBottom:"0"}}>
              <Button
                type="defaulf"
                shape="circle"
                icon={<PlusOutlined />}
              ></Button>
            </Form.Item>
          </Form>
        </div>
        <ToolContainer></ToolContainer>
      </div>
      <NewQuestion></NewQuestion>
    </div>
  );
}
export default CrOptionQuestion;
