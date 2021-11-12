import React from "react";
import TeacherScreen from "./screens/teacher_test_screen/teacher_screen";
import StudentTestScreen from "./screens/testscreen/sutdent_test_screen";
import StuGradeTable from "./screens/markscreen/stu_screen_table";
import TeaMarkScreen from "./screens/markscreen/tea_screen_table";
function App() {
  return (
    <div>
      {/* <StuGradeTable></StuGradeTable> */}
      {/* <TeaMarkScreen></TeaMarkScreen> */}
      <StudentTestScreen></StudentTestScreen>
      {/* <TeacherScreen></TeacherScreen> */}
    </div>
  );
}

export default App;
