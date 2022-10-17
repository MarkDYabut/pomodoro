import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"
import Experiments from "./experiments"
import GitInfo from 'react-git-info/macro';

const Container = styled.div`
  margin: 4rem auto;
  padding-bottom: 100px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  align-self: center;
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  font-size: 1rem;
  line-height: 23px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

&:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
  transform: translate3d(0, 2px, 0);
}

&:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
`
const StyledList = styled.ul`
list-style-type: none;
padding-right: 40px;
`

const gitInfo = GitInfo();

const openInNewTab = url => {
  if (window.confirm("This link will open in a new tab as it is an external link, Continue?")) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    console.log("user cancelled")
  }
};

const header = 
  <div>
    <StyledList>
      <li><Link to="/app">[app]</Link>--<Link to="/app2">[app2]</Link></li>
      <li><StyledButton onClick={() => openInNewTab('https://github.com/MarkDYabut/pomodoro/commits/master')}>See last changes here</StyledButton></li>
      {/* <li>Commit Branch: {gitInfo.branch}</li> */}
      <li>Commit Branch: master</li>
      {/* <li>Commit Tags {gitInfo.tags}</li> */}
      <li>Commit Date: {gitInfo.commit.date}</li>
      {/* <li>Commit Short Hash {gitInfo.commit.shortHash}</li> */}
      <li>Commit Message: {gitInfo.commit.message}</li>
    </StyledList>
    </div>;
 
const footer = 
  <footer>
    <p><a href="https://giphy.com/explore/background">gifs source</a></p>
  </footer>;

export default function Layout({children}) {

  return (
    <Container>
      {header}
      {children}
      {footer}
    </Container>
  )
};