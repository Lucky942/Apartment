import React from "react";
import Question from "./Question";
import { setPersonInCouple } from "../../redux/reducers/peopleReducer";
import { useDispatch } from "react-redux";

export default ({ setReady, setCouple }) => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Question>
        Выберите нужные кровати для создания одной двуспальной
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
