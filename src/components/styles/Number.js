import React, { useRef } from 'react';
import styled from "styled-components";

const Input = styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 3px solid #cabd99;
  transition: 0.5s;
  font-size: 60px;
  width: 35px;
  margin-bottom: 120px;
  color: #cabd99;
  
  &:focus {
    outline: none;
    border-bottom: 1px solid #cabd99;
  }
`;

export default ({ changeBedsNumber }) => {

    let number = useRef(3);

    const handleChange = () => {
        changeBedsNumber(number.current.value);
    };

    return (
        <Input onChange={handleChange} ref={number} placeholder={3}/>
    );
}
