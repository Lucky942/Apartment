import React, { useState } from "react";
import styled from "styled-components";
import Bed from "./Bed";
import BigBed from "./BigBed";
import { connect } from "react-redux";
import {setAge, setGender, setName, setPeopleNumber, setPersonInCouple} from "../../redux/reducers/actions";

const BedsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  justify-items: center;
`;

const BedsComponent = ({
  bedsNumber,
  isCouple,
  people,
  setName,
  setAge,
  setGender,
  couple,
  setPersonInCouple,
  isReady
}) => {
  //const [couple, setState] = useState({ coupleSelected: false, couple: [] });

  /*const setCouple = number => {
    if (couple.couple.includes(number) && couple.couple.length === 1) {
      setState({ ...couple, couple: [] });
    } else if (!couple.couple.includes(number) && couple.couple.length === 1) {
      setState({ coupleSelected: true, couple: [...couple.couple, number] });
    } else {
      setState({ ...couple, couple: [...couple.couple, number] });
    }
  };*/

  const getBeds = () => {
    /*let i = 0,*/
    let beds = [];
    couple.couple.length === 2 &&
      isCouple &&
      beds.push(
        <BigBed
          isReady={isReady}
          personInfo={people.filter(elem =>
            couple.couple.includes(elem.number)
          )}
          bedsNumber={bedsNumber}
          key={bedsNumber}
          setName={setName}
          setAge={setAge}
          setGender={setGender}
        />
      ); /*&&
      (i = i + 2);*/
    // give proper number
    for (let i = 0; i < bedsNumber; i++)
      if (!(couple.couple.includes(people[i].number) && couple.coupleSelected))
        beds.push(
          <Bed
            isReady={isReady}
            isCouple={isCouple}
            personInfo={people[i]}
            setName={setName}
            setAge={setAge}
            setGender={setGender}
            coupleSelected={couple.coupleSelected}
            setInCouple={setPersonInCouple}
            key={i}
          />
        );

    /*while (i < bedsNumber) {
      beds.push(
        <Bed
          isCouple={isCouple}
          personInfo={people[i]}
          setName={setName}
          setAge={setAge}
          setGender={setGender}
          coupleSelected={couple.coupleSelected}
          setInCouple={setCouple}
          key={i}
          number={i}
        />
      );
      i++;
    }*/
    return beds;
  };

  return <BedsContainer>{getBeds(bedsNumber)}</BedsContainer>;
};

const mapStateToProps = state => {
  return {
    people: state.peopleReducer.people,
    couple: state.peopleReducer.couple
  };
};

export default connect(mapStateToProps, {
  setName,
  setAge,
  setGender,
  setPeopleNumber,
  setPersonInCouple
})(BedsComponent);
