import React from "react";
import Question from "./Question";
import Buttons from "./Button";

export default ({ setCouple }) => {
  return (
    <React.Fragment>
      <Question>Есть ли среди проживающих пары?</Question>
      <Buttons setCouple={setCouple} />
    </React.Fragment>
  );
};
