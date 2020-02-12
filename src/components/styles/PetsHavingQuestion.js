import React from "react";
import Question from "./Question";
import Buttons from "./Buttons";
import { useDispatch } from "react-redux";
import {setPetsExistingStatus} from "../../redux/reducers/actions";

export default ({ handleYes }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Question>Есть ли у вас питомцы?</Question>
      <Buttons handleYes={() => dispatch(setPetsExistingStatus())} />
    </React.Fragment>
  );
};
