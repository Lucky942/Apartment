import React, { useState } from "react";
import styled from "styled-components";
import bigBed from "../../assets/bigBed.png";
import bedSideTable from "../../assets/bedSideTable.png";
import Inputs from "./Input";

const BigBedWithBedSideTable = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 135px 424px 135px;
    align-items: flex-end;
}
`;

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

const BedSideTable = styled.div`
  background: url(${bedSideTable}) no-repeat;
  width: 135px;
  height: 129px;
`;

export default ({ isReady, setName, setAge, setGender, personInfo }) => {
  debugger;
  return (

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


  );
};
