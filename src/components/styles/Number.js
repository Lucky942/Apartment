import React, { useRef } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {setPeopleNumber} from "../../redux/reducers/actions";

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

const Number = ({ setPeopleNumber, changeBedsNumber }) => {
  let number = useRef(3);

  const handleChange = () => {
    changeBedsNumber(number.current.value);
    setPeopleNumber(number.current.value);
  };

  return <Input onChange={handleChange} ref={number} placeholder={3} />;
};

export default connect(null, { setPeopleNumber })(Number);
