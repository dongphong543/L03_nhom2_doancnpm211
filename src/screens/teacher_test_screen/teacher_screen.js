import React from "react";
import ScreenHeader from "../components/screen_header";
import CrTextQuestion from "./textquestion/create_text_question";
import CrOptionQuestion from "./optionquestion/create_option_question";
import SaveButton from "./components/save_button";
import Navbar from "../../navbar";
import aplus from "../../assets/icon_aplus.png"
function TeacherScreen() {
  return (
    <div style={{
      paddingBottom: "50px",
      overflowX: 'hidden'
    }}>
      {/* <ScreenHeader name="Tạo bài kiểm tra"></ScreenHeader> */}
      <Navbar pageName="Tạo bài kiểm tra" 
              path={aplus} 
              checkStu={false}/>
              
    </div>
  );
}
export default TeacherScreen;
