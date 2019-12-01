import React, { useState } from "react";
import styled from "styled-components";
import bigBed from "../../assets/bigBed.png";
import Inputs from "./Input";

const BigBed = styled.div`
  background: url(${bigBed}) no-repeat;
  width: 424px;
  height: 249px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export default ({ setName, setAge, setGender, personInfo }) => {
  return (
    <BigBed>
      {personInfo.map(elem => (
        <Inputs
          setName={setName}
          setAge={setAge}
          setGender={setGender}
          personInfo={elem}
          number={elem.number}
          key={elem.number}
        />
      ))}
    </BigBed>
  );
};
