import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import bed from "../../assets/bed.png";
import Inputs from "./Input";

const Bed = styled.div`
  background: url(${bed}) no-repeat;
  width: 285px;
  height: 249px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => (props.colored ? "#cabd99" : "transparent")};
`;

export default ({
  personInfo,
  setName,
  setAge,
  setGender,
  isCouple,
  coupleSelected,
  setInCouple
}) => {
  const [colored, setColored] = useState(false);
  useEffect(() => {
    setColored(false);
  }, [coupleSelected]);
  const handleClick = () => {
    setInCouple(personInfo.number);
    setColored(!colored);
  };

  return (
    <Bed
      colored={colored}
      onClick={isCouple && !coupleSelected ? handleClick : null}
    >
      <Inputs
        personInfo={personInfo}
        setName={setName}
        setAge={setAge}
        setGender={setGender}
      />
    </Bed>
  );
};
