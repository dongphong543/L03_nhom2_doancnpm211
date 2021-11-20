import React, { useState } from "react";
import CrOptionQuestion from "./optionquestion/create_option_question";
import CrTextQuestion from "./textquestion/create_text_question";

const QuestionItem = (props) => {
  var questionContent;
  if (props.type === "TL") {
    questionContent = <CrTextQuestion />;
  } else {
    questionContent = <CrOptionQuestion />;
  }

  return questionContent;
};

export default QuestionItem;
