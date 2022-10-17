import React, {useState} from "react"
import styled from "styled-components"

import './experiments.css';

const StyledDivLight = styled.div`
  background-image: linear-gradient(#2193b0,#6dd5ed);
  background-image: url('https://media2.giphy.com/media/7AtHoQ9XWbpwLRxs0t/giphy.gif?cid=ecf05e4732xyhzam6bx9sir387mcadfh0qp1985or00innk5&rid=giphy.gif&ct=g');
  color: white;
  border-radius: 15px;
  `;
  
  const StyledDivDark = styled.div`
  background-image: linear-gradient(#2b5876,#4e4376);
  background-image: url('https://assets.objkt.media/file/assets-003/QmNfNZAtARzB5nX5xM2VrFGH38t63aPSiwfbpNx6udBNd8/artifact');
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