import React from "react";
import TextQuestion from "./textquestion/text_question";
import OptionQuestion from "./optionquestion/option_question";
import MultiChoiceQuestion from "./multiplequestion/multiple_choice_questtion";
import "./student_test_screen.css";
import { Button } from "antd";
import "antd/dist/antd.css";
import ScreenHeader from "../components/screen_header";

function StudentTestScreen() {
  function submit() {
    alert("Đã nộp bài");
  }
  return (
    <div className="container" style={{ overflowX: 'hidden' }}>
      <ScreenHeader name="Bài Kiểm Tra"></ScreenHeader>
      <TextQuestion></TextQuestion>
      <OptionQuestion></OptionQuestion>
      <MultiChoiceQuestion></MultiChoiceQuestion>
      <div className="button-container">
        <Button type="primary" onClick={submit} className="button" size="large">
          Nộp Bài
        </Button>
      </div>
    </div>
  );
}
export default StudentTestScreen;
