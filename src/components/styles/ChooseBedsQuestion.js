import React from "react";
import Question from "./Question";
import { useDispatch } from "react-redux";
import {setPersonInCouple} from "../../redux/reducers/actions";

export default ({ setReady, setCouple }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Question>
        Кликните на нужные кровати для создания одной двуспальной
      </Question>
      <button onClick={() => setReady(true)}>Готово</button>
      <button
        onClick={() => {
          setCouple(false);
          dispatch(setPersonInCouple());
        }}
      >
        Отменить
      </button>
    </React.Fragment>
  );
};
