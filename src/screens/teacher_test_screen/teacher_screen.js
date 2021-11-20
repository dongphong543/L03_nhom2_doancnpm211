import React, { useState } from "react";
import ScreenHeader from "../components/screen_header";
import QuestionItem from "./QuestionItem";
import NewQuestion from "./components/new_question";
import SaveButton from "./components/save_button";
import ToolContainer from "./components/tool_container";

function TeacherScreen() {
  const [questionsList, setQuestionsList] = useState([]);

  const addQuestionHandler = () => {
    const tempID = Math.floor(Math.random() * 100000 + 1);
    questionsList.push({
      id: tempID,
      type: "TL",
    });
    setQuestionsList([...questionsList]);
  };

  const removeQuestionHandler = (id) => {
    setQuestionsList(questionsList.filter((element) => element.id !== id));
  };

  const changeTypeQuestionHandler = (id, _type) => {
    var index = questionsList.findIndex((e) => e.id === id);
    questionsList[index].type = _type;
    setQuestionsList([...questionsList]);
  };

  return (
    <div
      style={{
        overflowX: "hidden",
        margin: "0 auto",
      }}
    >
      <ScreenHeader name="Tạo bài kiểm tra"></ScreenHeader>
      <hr
        style={{
          backgroundColor: "#eee",
          height: 0.05,
          width: "auto",
          borderColor: "transparent",
          boxShadow: "0px -3px 8px 1px rgba(210, 210, 210, 0.6)",
        }}
      />
      <div
        className="container"
        style={{
          width: "80vw",
          height: "100vh",
          margin: "0 auto",
        }}
      >
        <ul style={{ padding: "0px" }}>
          {questionsList.map((e) => {
            return (  
              <div key={e.id} style={{ marginBottom: "10px" }}>
                <h2>
                  {"Câu " +
                    (questionsList.findIndex((element) => element.id === e.id) +
                      1)}
                </h2>
                <QuestionItem type={e.type} />
                <ToolContainer
                  toolID={e.id}
                  onClickDelete={() => removeQuestionHandler(e.id)}
                  onChangeType={changeTypeQuestionHandler}
                ></ToolContainer>
              </div>
            );
          })}
        </ul>
        <NewQuestion onAddQuestion={addQuestionHandler}></NewQuestion>
        <SaveButton></SaveButton>
      </div>
    </div>
  );
}
export default TeacherScreen;
