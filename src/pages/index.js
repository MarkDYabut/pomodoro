import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { Link } from "gatsby"

const Button = styled(Link)`
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #dbdbdb 100%);
  background-color: #ffffff;
  border-radius: 6px;
  border: 1px solid #dcdcdc;
  display: inline-block;
  cursor: pointer;
  color: #595959;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #ffffff;
  margin: 2rem auto;

  :hover {
    background: linear-gradient(to bottom, #dbdbdb 5%, #ffffff 100%);
    background-color: #dbdbdb;
  }

  :active {
    position: relative;
    top: 1px;
  }
`
const Quotes = styled.div`
  font-style: italic;
`

export default function UsersList() {
  return (
    <Layout>
      <h1>Pomodoro</h1>
      <Button to="/app">Start</Button>
      <Quotes>
        <p>"life is a game, level up"</p>
        <p>"value of time itself is dictated by how well it is used"</p>
        <p>"commit to something or be distracted by everything"</p>
        <p>"track the past, organize the present, design the future"</p>
        <p>
          "make it obvious, make it attractive, make it easy, make it
          satisfying"
        </p>
        <p>"start by doing it badly, but do it"</p>
        <p>
          "you do not rise to the level of your goals, you fall to the levels of
          your systems"
        </p>
        <p>"competence is highly dependent on context"</p>
        <p>
          "work expands so as to fill the time available for its completion"
        </p>
        <p>"our brain is for having ideas, not storing them"</p>
        <p>"it’s not about the destination, it’s about the journey"</p>
        <p>"pace yourself and improve your pace"</p>
        <p>"life is both a marathon and a race"</p>
        <p>"time is the greatest editor"</p>
        <p>
          "we should always allow some time to elapse, for time discloses the
          truth"
        </p>
        <p>"maximize desirables and minimize undesirables"</p>
      </Quotes>
    </Layout>
  )
}
