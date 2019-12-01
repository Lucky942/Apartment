import React, { useState } from "react";
import "./App.css";
import Container from "./components/styles/Container";
import Title from "./components/styles/Title";
import Slogan from "./components/styles/Slogan";
import VideoFrame from "./components/styles/VideoFrame";
import Question from "./components/styles/Question";
import BedsContainer from "./components/styles/BedsContainer";
import Number from "./components/styles/Number";
import Buttons from "./components/styles/Button";

const App = () => {
  const [bedsNumber, changeBedsNumber] = useState(1);
  const [isCouple, setCouple] = useState(false);

  return (
    <Container>
      <Title>MIKHEEV/ARCHITECT</Title>
      <Slogan>
        один шаг до интерьера <br /> вашей мечты!
      </Slogan>
      <VideoFrame />
      <Question>
        Введите количество человек, ПРОЖИВАЮЩИХ в данной комнате
      </Question>
      <Number changeBedsNumber={changeBedsNumber} />
      <BedsContainer isCouple={isCouple} bedsNumber={bedsNumber} />

      {bedsNumber > 1 &&
        ((isCouple && (
          <React.Fragment>
            <Question>
              Выберите нужные кровати для создания одной двуспальной
            </Question>
            <button onClick={() => setCouple(false)}>Отменить</button>
          </React.Fragment>
        )) || (
          <React.Fragment>
            <Question>Есть ли среди проживающих пары?</Question>
            <Buttons setCouple={setCouple} />
          </React.Fragment>
        ))}
    </Container>
  );
};

export default App;
