import React from "react";
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
`;

export default () => {
  return (
    <Bed>
      <Inputs />
    </Bed>
  );
};
