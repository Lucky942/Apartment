import React from "react";
import styled from "styled-components";

const InputsContainer = styled.div`
  text-align: left;
  width: 80%;
  padding-bottom: 40px;
  font-family: "Ledger", serif;
  text-transform: uppercase;
  font-size: 16px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  float: right;
  border-bottom: 1px solid black;
  transition: 0.5s;

  &:focus {
    outline: none;
    border-bottom: 1px solid blue;
  }
`;

const Select = styled.select`
  border: none;
  background-color: transparent;
  font-weight: bold;
  float: right;
  font-size: 16px;
`;

export default ({ personInfo, setName, setAge, setGender }) => {
  return (
    <InputsContainer>
      <div>
        <label>
          {" "}
          Имя
          <Input
            value={personInfo.name}
            onClick={event => event.stopPropagation()}
            onChange={event =>
              setName(event.currentTarget.value, personInfo.number)
            }
          />
        </label>
      </div>
      <div>
        <label>
          Возраст
          <Input
            value={personInfo.age}
            onClick={event => event.stopPropagation()}
            onChange={event =>
              setAge(event.currentTarget.value, personInfo.number)
            }
          />
        </label>
      </div>
      <div>
        <label>
          Пол
          <Select
            value={personInfo.gender}
            onClick={event => event.stopPropagation()}
            onChange={event =>
              setGender(event.currentTarget.value, personInfo.number)
            }
          >
            <option value="М">М</option>
            <option value="Ж">Ж</option>
          </Select>
        </label>
      </div>
    </InputsContainer>
  );
};
