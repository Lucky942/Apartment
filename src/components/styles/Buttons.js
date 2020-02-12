import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50%;
  border: none;
  background-color: #cabd99;
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;

export default ({ handleYes }) => {
  return (
    <>
      <Button onClick={handleYes ? () => handleYes(true) : null}>Да</Button>
      <Button>Нет</Button>
    </>
  );
};
