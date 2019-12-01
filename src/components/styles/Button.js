import React from "react";
import styled from "styled-components";

const Button = styled.button`
  border-radius: 50%;
  border: none;
  background-color: #cabd99;
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;

export default ({ setCouple }) => {
  return (
    <>
      <Button onClick={() => setCouple(true)}>Да</Button>
      <Button>Нет</Button>
    </>
  );
};
