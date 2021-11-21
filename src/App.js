import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // v6

import Login from "./login_screen";
import Signup from "./signup_screen";
import StuTimetable from "./stu_timetable";
import TeaTimetable from "./tea_timetable";
import Join from "./join_class";
import Class from "./class_content"; //teacher
import Room from "./Room"; //student
import Tea_info_screen from "./tea_info_screen";
import Stu_info_screen from "./stu_info_screen";
import TeaSubjectScreen from "./tea_subject_list_screen";
import StuSubjectScreen from "./stu_subject_list_screen";
import Bangdiem from "./screens/markscreen/stu_screen_table";
// import Forum from "./forum_screen";
import NForum from "./forum_screen";
import SForum from "./forum_screen_s";
import StuUI from "./gdhs";
import TeaUI from "./gdgv";
import ClassManage from "./qllh";
import MarkManage from "./qld";
import TestScreen from "./screens/testscreen/student_test_screen";
import CreateClass from "./create_class"
import AddTest from "./screens/teacher_test_screen/teacher_screen"

function App() {
  // return <Login />;
    // return <Signup />;
    // return <NForum />;
    // return <Join />;
    // return <Timetable />;
    // return <CreateClass />;
    // return <Class />;
    // return <Info_screen />;
    // return <Room />; //for student, in future
    // return <StuUI />;
    // return <TeaUI />;
    
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/shome" element={<StuUI />} />
          <Route exact path="/home" element={<TeaUI />} />
          <Route exact path="/class" element={<Class />} />
          <Route exact path="/classroom" element={<Room />} />
          <Route exact path="/forum" element={<NForum />} />
          <Route exact path="/sforum" element={<SForum />} />
          <Route exact path="/stutimetable" element={<StuTimetable />} />
          <Route exact path="/teatimetable" element={<TeaTimetable />} />
          <Route exact path="/joinclass" element={<Join />} />
          <Route exact path="/ptstable" element={<Bangdiem />} />
          <Route exact path="/stuinfo" element={<Stu_info_screen />} />
          <Route exact path="/teainfo" element={<Tea_info_screen />} />
          <Route exact path="/teachersubject" element={<TeaSubjectScreen />} />
          <Route exact path="/studentsubject" element={<StuSubjectScreen />} />
          <Route exact path="/testui" element={<TestScreen />} />
          <Route exact path="/classmanage" element={<ClassManage />} />
          <Route exact path="/markmanage" element={<MarkManage />} />
          <Route exact path="/createclass" element={<CreateClass />} />
          <Route exact path="/addtest" element={<AddTest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
