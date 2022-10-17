import React, {useState} from "react"
import styled from "styled-components"

import './experiments.css';

const StyledDivLight = styled.div`
  background-image: linear-gradient(#2193b0,#6dd5ed);
  color: black;
  border-radius: 15px;
`;

const StyledDivDark = styled.div`
  background-image: linear-gradient(#2b5876,#4e4376);
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