import React, { useState } from "react";
import "./App.css";
import Container from "./components/styles/Container";
import Title from "./components/styles/Title";
import Slogan from "./components/styles/Slogan";
import VideoFrame from "./components/styles/VideoFrame";
import Question from "./components/styles/Question";
import BedsContainer from "./components/styles/BedsContainer";
import Number from "./components/styles/Number";
import Buttons from "./components/styles/Buttons";
import { connect } from "react-redux";
import ChooseBedsQuestion from "./components/styles/ChooseBedsQuestion";
import CoupleExistingQuestion from "./components/styles/CoupleExistingQuestion";
import PetsHavingQuestion from "./components/styles/PetsHavingQuestion";
import Pets from "./components/styles/Pets";

const App = ({ coupleSelected, petsExistingStatus }) => {
  const [bedsNumber, changeBedsNumber] = useState(1);
  const [isCouple, setCouple] = useState(false);
  const [isReady, setReady] = useState(false);

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
      <BedsContainer
        isReady={isReady}
        isCouple={isCouple}
        bedsNumber={bedsNumber}
      />

      {bedsNumber > 1 &&
        !isReady &&
        ((isCouple && (
          <ChooseBedsQuestion setReady={setReady} setCouple={setCouple} />
        )) ||
          (!coupleSelected && (
            <CoupleExistingQuestion setCouple={setCouple} />
          )))}

      {isReady && <Question>Кликом уберите ненужные тумбы</Question>}

        {(petsExistingStatus && <Pets/>) || <PetsHavingQuestion />}

        <Question>Выберите нужные вам функциональные зоны</Question>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    coupleSelected: state.peopleReducer.couple.coupleSelected,
    petsExistingStatus: state.peopleReducer.pets.isExisting
  };
};

export default connect(mapStateToProps)(App);
