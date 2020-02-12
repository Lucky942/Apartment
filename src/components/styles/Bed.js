import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import bed from "../../assets/bed.png";
import Inputs from "./Input";
import { BedSideTable } from "./BigBed";
import { useDispatch } from "react-redux";
import {setBedSideTableStatus} from "../../redux/reducers/actions";

const Bed = styled.div`
  background: url(${bed}) no-repeat;
  width: 285px;
  height: 249px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-color: ${props => (props.colored ? "#cabd99" : "transparent")};
`;

const BedWithBedSideTable = styled.div`
  display: grid;

  grid-auto-flow: column;
  align-items: flex-end;
  grid-gap: 10px;
`;

export default ({
  isReady,
  personInfo,
  setName,
  setAge,
  setGender,
  isCouple,
  coupleSelected,
  setInCouple
}) => {
  const [colored, setColored] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setColored(false);
  }, [coupleSelected]);

  const handleClick = () => {
    setInCouple(personInfo.number);
    setColored(!colored);
  };

  return (
    <>
      {(isReady && (
        <BedWithBedSideTable>
          {personInfo.bedSideTableStatus && (
            <BedSideTable
              onClick={() => dispatch(setBedSideTableStatus(personInfo.number))}
            />
          )}
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
        </BedWithBedSideTable>
      )) || (
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
      )}
    </>
  );
};
