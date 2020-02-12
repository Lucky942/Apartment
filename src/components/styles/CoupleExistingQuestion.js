import React from "react";
import Question from "./Question";
import Buttons from "./Buttons";

export default ({ setCouple }) => {
  return (
    <React.Fragment>
      <Question>Есть ли среди проживающих пары?</Question>
      <Buttons handleYes={setCouple} />
    </React.Fragment>
  );
};
