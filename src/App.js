import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // v6

import Login from "./login_screen";
import Signup from "./signup_screen";
import Timetable from "./timetable";
import Join from "./join_class";
import Class from "./class_content";
import Room from "./Room";
import Info_screen from "./Info_screen";
import SubjectScreen from "./subject_list_screen";
import Bangdiem from "./screens/markscreen/stu_screen_table";
// import Forum from "./forum_screen";
import NForum from "./NEW forum_screen";
import StuUI from "./gdhs";
import TeaUI from "./gdgv";

function App() {
  return (
    // return <Login />;
    // return <Signup />;
    // return <NForum />;
    // return <Join />;
    // return <Timetable />;
    // return <Class />;
    // return <Info_screen />;
    // return <Room />; //for student, in future
    // return <StuUI />;
    // return <TeaUI />;

    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/shome" element={<StuUI />} />
          <Route exact path="/home" element={<TeaUI />} />
          <Route exact path="/class" element={<Class />} />
          <Route exact path="/classroom" element={<Room />} />
          <Route exact path="/forum" element={<NForum />} />
          <Route exact path="/timetable" element={<Timetable />} />
          <Route exact path="/joinclass" element={<Join />} />
          <Route exact path="/ptstable" element={<Bangdiem />} />
          <Route exact path="/info" element={<Info_screen />} />
          <Route exact path="/subject" element={<SubjectScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
