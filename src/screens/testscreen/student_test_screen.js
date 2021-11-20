import React from "react";
import TextQuestion from "./textquestion/text_question";
import OptionQuestion from "./optionquestion/option_question";
import MultiChoiceQuestion from "./multiplequestion/multiple_choice_questtion";
import "./student_test_screen.css";
import { Button, Statistic } from "antd";
import "antd/dist/antd.css";
import ScreenHeader from "../components/screen_header";

function StudentTestScreen() {
  const deadline = 60 * 15 * 1000;
  const { Countdown } = Statistic;
  function submit() {
    alert("Đã nộp bài");
  }

  return (
    <div className="container" style={{ overflowX: "hidden" }}>
      <ScreenHeader name="Bài Kiểm Tra"></ScreenHeader>
      <h2 style={{ textAlign: "center", fontSize: "40px" }}>
        Kiểm tra 15 phút
      </h2>

      <div style={{ width: "70vw", margin: "0 auto" }}>
        <Countdown
          title="Thời gian"
          value={Date.now() + deadline}
          valueStyle={{ color: "#1f468b", fontWeight: "600" }}
          style={{ margin: "10px 0" }}
        />
        <TextQuestion></TextQuestion>
        <OptionQuestion></OptionQuestion>
        <MultiChoiceQuestion></MultiChoiceQuestion>
        <div className="button-container">
          <Button
            type="primary"
            onClick={submit}
            className="button"
            size="large"
          >
            Nộp Bài
          </Button>
        </div>
      </div>
    </div>
  );
}
export default StudentTestScreen;
