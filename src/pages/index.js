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
  margin: 1rem auto;

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

const List = styled.div`
  /* text-align: left; */
`

export default function UsersList() {
  return (
    <Layout>
      <h1>Tool kit</h1>
      <Button to="/app">Pomodoro Timer</Button>
      <p>
        Pomodoro Timer is a countdown timer that utilizes the "Pomodoro
        Technique." <br />
        Use-case: getting work done.
      </p>
      <Button to="/app2">Run / Pause Timer</Button>
      <p>
        Run / Pause Timer is a timer that has 2 operating states called Running
        and Paused. An internal clock will sum the total time spent in each
        state. Unlike the Pomodoro Timer which uses setInterval() to calculate
        time, this tool uses the Date() object, which means that the timer will
        work and remain accurate even when the application is minimized. <br />
        Use-case: figuring out where your time is going -> ie: sleep.
      </p>
    </Layout>
  )
}
