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
      <button onClick={handleClick}>change theme</button>
      {isActive && 
        <StyledDivDark>
          <StyledDiv id="test">
            {children}
          </StyledDiv>
        </StyledDivDark>
      }
      {!isActive && 
        <StyledDivLight>
          <StyledDiv id="test">
            {children}
          </StyledDiv>
        </StyledDivLight>
      }
    </>
  )
}

export default Experiments