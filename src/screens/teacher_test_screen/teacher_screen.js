import React from "react";
import ScreenHeader from "../components/screen_header";
import CrTextQuestion from "./textquestion/create_text_question";
import CrOptionQuestion from "./optionquestion/create_option_question";
import SaveButton from "./components/save_button";

function TeacherScreen() {
  return (
    <div style={{
      paddingBottom: "50px",
      overflowX: 'hidden'
    }}>
      <ScreenHeader name="Tạo bài kiểm tra"></ScreenHeader>
      <CrTextQuestion></CrTextQuestion>
      <CrOptionQuestion></CrOptionQuestion>
      <SaveButton></SaveButton>
    </div>
  );
}
export default TeacherScreen;
