import React from "react";
import styled from "styled-components";

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
  border-radius: 50%;
  border: none;
  background-color: #cabd99;
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;

export default () => {
  return (
    <>
      <Button>Да</Button>
      <Button>Нет</Button>
    </>
  );
};
