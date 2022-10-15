import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import Break from "../components-app/Break"
import Focus from "../components-app/Focus"
import TimeLeft from "../components-app/TimeLeft"

import Layout from "../components/layout"

const Quotes = styled.div`
  font-style: italic;
`

// const Button = styled.button`
//   box-shadow: inset 0px 1px 0px 0px #ffffff;
//   background: linear-gradient(to bottom, #ffffff 5%, #dbdbdb 100%);
//   background-color: #ffffff;
//   border-radius: 6px;
//   border: 1px solid #dcdcdc;
//   display: inline-block;
//   cursor: pointer;
//   color: #595959;
//   font-family: Arial;
//   font-size: 15px;
//   font-weight: bold;
//   padding: 6px 24px;
//   text-decoration: none;
//   text-shadow: 0px 1px 0px #ffffff;
//   margin: 2rem auto;

//   :hover {
//     background: linear-gradient(to bottom, #dbdbdb 5%, #ffffff 100%);
//     background-color: #dbdbdb;
//   }

//   :active {
//     position: relative;
//     top: 1px;
//   }
// `

const App = () => {
  const audioElement = useRef(null)
  const [breakLength, setBreakLength] = useState(60 * 5)
  const [focusLength, setFocusLength] = useState(60 * 25)
  const [currentFocusType, setCurrentFocusType] = useState("Levelling")
  const [intervalId, setIntervalId] = useState(null)
  const [timeLeft, setTimeLeft] = useState(focusLength)
  const [action, setAction] = useState("start")
  //
  useEffect(() => {
    if (currentFocusType === "Levelling") {
      setTimeLeft(focusLength)
    } else {
      setTimeLeft(breakLength)
    }
    setAction("start")
    console.log(currentFocusType)
  }, [currentFocusType, action])

  const isStarted = intervalId != null

  const handleStartStopClick = () => {
    if (isStarted) {
      // started mode
      // stops interval
      clearInterval(intervalId)
      setIntervalId(null)
    } else {
      // stopped mode
      // starts interval
      const newIntervalId = setInterval(() => {
        setTimeLeft(prevTimeLeft => {
          const newTimeLeft = prevTimeLeft - 1
          if (newTimeLeft >= 0) {
            return newTimeLeft
          }
          audioElement.current.play()
          // focus types
          if (currentFocusType === "Levelling") {
            // switch to break focus
            setCurrentFocusType("Break")
            return breakLength
          } else if (currentFocusType === "Break") {
            setCurrentFocusType("Levelling")
            return focusLength
          }
        })
      }, 1000)
      setIntervalId(newIntervalId)
    }
  }

  const handleResetButtonClick = () => {
    audioElement.current.load()
    clearInterval(intervalId)
    setIntervalId(null)
    setCurrentFocusType("Levelling")
    setFocusLength(60 * 25)
    setBreakLength(60 * 5)
    setTimeLeft(60 * 25)
  }

  // break functionality
  const decrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength - 60

    if (newBreakLength > 0) {
      setBreakLength(newBreakLength)
    }
  }

  const incrementBreakLengthByOneMinute = () => {
    const newBreakLength = breakLength + 60

    if (newBreakLength <= 60 * 60) {
      setBreakLength(newBreakLength)
    }
  }

  // focus functionality
  const decrementFocusLengthByOneMinute = () => {
    const newFocusLength = focusLength - 60

    if (newFocusLength > 0) {
      setFocusLength(newFocusLength)
    }
  }

  const incrementFocusLengthByOneMinute = () => {
    const newFocusLength = focusLength + 60
    if (newFocusLength <= 60 * 60) {
      setFocusLength(focusLength + 60)
    }
  }

  const handleStateButtonClick = () => {
    if (currentFocusType === "Levelling") {
      // switch to break focus
      setCurrentFocusType("Break")
    } else if (currentFocusType === "Break") {
      setCurrentFocusType("Levelling")
    }
    console.log("current state: " + currentFocusType)
  }

  const handleUpdateButtonClick = () => {
    setFocusLength(focusLength)
    setBreakLength(breakLength)
    setAction("Update")
  }

  return (
    <Layout>
      <TimeLeft
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentFocusType}
        startStopButtonLabel={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
      />
      <button id="state" onClick={handleStateButtonClick}>
        Change State
      </button>
      <h2>
        <i>"life is a game, level up"</i>
      </h2>
      <br />
      <Break
        breakLength={breakLength}
        decrementBreakLengthByOneMinute={decrementBreakLengthByOneMinute}
        incrementBreakLengthByOneMinute={incrementBreakLengthByOneMinute}
      />
      <Focus
        focusLength={focusLength}
        decrementFocusLengthByOneMinute={decrementFocusLengthByOneMinute}
        incrementFocusLengthByOneMinute={incrementFocusLengthByOneMinute}
      />
      <br />
      <button id="update" onClick={handleUpdateButtonClick}>
        Update
      </button>
      <button id="reset" onClick={handleResetButtonClick}>
        Reset
      </button>
      <br />

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
        <p>
          "There are six steps in the original technique:
          <div>
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
          </div>
        </p>
      </Quotes>
      <br />
      <br />
      <audio id="beep" ref={audioElement}>
        <source
          src="https://onlineclock.net/audio/options/default.mp3"
          type="audio/mpeg"
        />
      </audio>
    </Layout>
  )
}

export default App
