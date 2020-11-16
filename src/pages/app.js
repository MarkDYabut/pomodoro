import React, { useState, useEffect, useRef } from "react"
import Break from "../components-clock/Break"
import Focus from "../components-clock/Focus"
import TimeLeft from "../components-clock/TimeLeft"
import Layout from "../components/layout"
import styled from "styled-components"

const Button = styled.button`
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

const App = () => {
  const audioElement = useRef(null)
  const [breakLength, setBreakLength] = useState(60 * 5)
  const [focusLength, setFocusLength] = useState(60 * 25)
  const [currentFocusType, setCurrentFocusType] = useState("Focus")
  const [intervalId, setIntervalId] = useState(null)
  const [timeLeft, setTimeLeft] = useState(focusLength)
  //
  useEffect(() => {
    setTimeLeft(focusLength)
  }, [focusLength])

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
          if (currentFocusType === "Focus") {
            // switch to break focus
            setCurrentFocusType("Break")
            return breakLength
          } else if (currentFocusType === "Break") {
            setCurrentFocusType("Focus")
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
    setCurrentFocusType("Focus")
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

  return (
    <Layout>
      <TimeLeft
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentFocusType}
        startStopButtonLabel={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
      />
      <Button id="reset" onClick={handleResetButtonClick}>
        Reset
      </Button>
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
