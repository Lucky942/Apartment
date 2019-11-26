import styled from "styled-components";
import React from "react";
import Bed from "./Bed";

const BedsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
  justify-items: center;
`;

export default ({ bedsNumber }) => {
  const getBeds = () => {
    let i = 0,
      beds = [];
    while (i < bedsNumber) {
      beds.push(<Bed key={i} />);
      i++;
    }
    return beds;
  };

  return (
    <BedsContainer>
      {getBeds(bedsNumber)}
    </BedsContainer>
  );
};
