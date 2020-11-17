import React, { useState, useEffect, useRef } from "react"
import Break from "../components-clock/Break"
import Focus from "../components-clock/Focus"
import TimeLeft from "../components-clock/TimeLeft"
import Layout from "../components/layout"
import styled from "styled-components"

const Quotes = styled.div`
  font-style: italic;
`

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
  const [currentFocusType, setCurrentFocusType] = useState("Levelling")
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

  return (
    <Layout>
      <TimeLeft
        handleStartStopClick={handleStartStopClick}
        timerLabel={currentFocusType}
        startStopButtonLabel={isStarted ? "Stop" : "Start"}
        timeLeft={timeLeft}
      />
      <br />
      <h2>
        <i>"life is a game, level up"</i>
      </h2>

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
      <Button id="reset" onClick={handleResetButtonClick}>
        Reset
      </Button>
      <Quotes>
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
