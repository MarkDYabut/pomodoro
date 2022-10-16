import React, {useState} from "react"
import styled from "styled-components"

import './experiments.css';

const StyledDivLight = styled.div`
  background-color: white;
  color: black;
  border-radius: 15px;
`;

const StyledDivDark = styled.div`
  background-color: black;
  color: white;
  border-radius: 15px;
`;

const StyledDiv = styled.div`
  margin: 25px;
`

function Experiments({children}) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <>
      <div>
        <h2>Experimental Themes</h2>
        <p>sup</p>
        <p>sup</p>
        <p>sup</p>
        <p>sup</p>
      </div>
      <button onClick={handleClick}>change theme</button>
      {isActive && 
        <StyledDivDark>
          <StyledDiv id="test">
            <p>what's your name</p>
            {children}
          </StyledDiv>
        </StyledDivDark>
      }
      {!isActive && 
        <StyledDivLight>
          <StyledDiv id="test">
            <p>what's your name</p>
            {children}
          </StyledDiv>
        </StyledDivLight>
      }
    </>
  )
}

export default Experiments