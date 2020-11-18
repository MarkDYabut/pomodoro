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

const List = styled.div`
  /* text-align: left; */
`

export default function UsersList() {
  return (
    <Layout>
      <h1>Pomodoro</h1>
      <Button to="/app">Start</Button> <Button to="/timer">Beta Testing</Button>
      <Quotes>
        <p>
          The Pomodoro Technique is a time management method developed by
          Francesco Cirillo in the late 1980s. The technique uses a timer to
          break down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for 'tomato', after the tomato-shaped kitchen timer
          that Cirillo used as a university student. (
          <a
            target="_blank"
            href="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          >
            wiki
          </a>
          )
        </p>
        <p>
          "The technique has been widely popularized by dozens of apps and
          websites providing timers and instructions. Closely related to
          concepts such as timeboxing and iterative and incremental development
          used in software design; the method has been adopted in pair
          programming contexts."
        </p>
        <br />
        <p>
          "There are six steps in the original technique:
          <List>
            <p>1. Decide on the task to be done</p>
            <p>2. Set the pomodoro timer (traditionally to 25 minutes)</p>
            <p>3. Work on the task</p>
            <p>
              4. End work when the timer rings and put a checkmark on a piece of
              paper
            </p>
            <p>
              5. If you have fewer than four checkmarks, take a short break (3–5
              minutes) and then return to step 2; otherwise continue to step 6
            </p>
            <p>
              6. After four pomodoros, take a longer break (15–30 minutes),
              reset your checkmark count to zero, then go to step 1"
            </p>
          </List>
        </p>
      </Quotes>
    </Layout>
  )
}
