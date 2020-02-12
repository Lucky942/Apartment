import React, { useState } from "react";
import styled from "styled-components";

import dog from "../../assets/dog.png";
import cat from "../../assets/cat.png";
import chosenCat from "../../assets/chosenCat.png";
import fish from "../../assets/fish.png";
import mouse from "../../assets/mouse.png";
import snake from "../../assets/snake.png";

const Pets = styled.div`
  display: grid;
  grid-auto-flow: column;
  margin-top: 20px;
`;

const Pet = styled.div`
  display: grid;
  justify-content: center;
  grid-template-rows: 40px auto;
`;

export default () => {
  const [pets, setPets] = useState([]);

  return (
    <Pets>
      <Pet>
        СОБАКА
        <img src={dog} alt="СОБАКА" />
      </Pet>
      <Pet>
        КОШКА
        <img
          onClick={() => {
            pets.includes("cat")
              ? setPets(pets => pets.filter(pet => pet !== "cat"))
              : setPets(pets => [...pets, "cat"]);
          }}
          src={pets.includes("cat") ? chosenCat : cat}
          alt="КОШКА"
        />
      </Pet>
      <Pet>
        РЫБЫ
        <img src={fish} alt="РЫБЫ" />
      </Pet>
      <Pet>
        ГРЫЗУНЫ/
        <br />
        НАСЕКОМОЯДНЫЕ
        <img src={mouse} alt="ГРЫЗУНЫ" />
      </Pet>
      <Pet>
        ПРЕСМЫКАЮЩИЕСЯ/
        <br />
        ПАУКООБРАЗНЫЕ
        <img src={snake} alt="Пресмыкающиеся" />
      </Pet>
      <div>ПТИЦЫ</div>
    </Pets>
  );
};
