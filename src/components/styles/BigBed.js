import React, { useState } from "react";
import styled from "styled-components";
import bigBed from "../../assets/bigBed.png";
import bedSideTable from "../../assets/bedSideTable.png";
import Inputs from "./Input";
import Bed from "./Bed";
import { useDispatch } from "react-redux";
import {setBedSideTableStatus} from "../../redux/reducers/actions";

/*const BigBedWithBedSideTable = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 135px 424px 135px;
    align-items: flex-end;
}
`;*/

const BigBedWithBedSideTable = styled.div`
    display: grid;
    grid-gap: 10px;
    
    align-items: flex-end;
    grid-column-start: 1;
    grid-column-end: span 2;  
    
    grid-auto-flow: column;
}
`;

//grid-template-columns: 135px 424px 135px;

const BigBed = styled.div`
  background: url(${bigBed}) no-repeat;
  width: 424px;
  height: 249px;
  display: flex;
  align-items: flex-end;
`;
//align-items: flex-end;
/*
  display: grid;
  grid-template-columns: 1fr 1fr;
*/

export const BedSideTable = styled.div`
  background: url(${bedSideTable}) no-repeat;
  width: 135px;
  height: 129px;
`;

export default ({
  bedsNumber,
  isReady,
  setName,
  setAge,
  setGender,
  personInfo
}) => {
  const dispatch = useDispatch();

  return (
    <>
      {(isReady && (
        <BigBedWithBedSideTable>
          {personInfo[0].bedSideTableStatus && (
            <BedSideTable
              onClick={() =>
                dispatch(setBedSideTableStatus(personInfo[0].number))
              }
            />
          )}
          <BigBed>
            {personInfo.map(elem => (
              <Inputs
                bigBed={true}
                setName={setName}
                setAge={setAge}
                setGender={setGender}
                personInfo={elem}
                number={elem.number}
                key={elem.number}
              />
            ))}
          </BigBed>
          {personInfo[1].bedSideTableStatus && (
            <BedSideTable
              onClick={() =>
                dispatch(setBedSideTableStatus(personInfo[1].number))
              }
            />
          )}
        </BigBedWithBedSideTable>
      )) || (
        <BigBed>
          {personInfo.map(elem => (
            <Inputs
              bigBed={true}
              setName={setName}
              setAge={setAge}
              setGender={setGender}
              personInfo={elem}
              number={elem.number}
              key={elem.number}
            />
          ))}
        </BigBed>
      )}
    </>
  );
};
