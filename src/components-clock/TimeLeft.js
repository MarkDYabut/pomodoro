import React from "react"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"
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

  :hover {
    background: linear-gradient(to bottom, #dbdbdb 5%, #ffffff 100%);
    background-color: #dbdbdb;
  }

  :active {
    position: relative;
    top: 1px;
  }
`

const Banner = styled.div`
  margin: 4rem auto;
  font-size: 300%;
`

momentDurationFormatSetup(moment)

const TimeLeft = ({
  handleStartStopClick,
  timeLeft,
  timerLabel,
  startStopButtonLabel,
}) => {
  const formattedTimeLeft = moment
    .duration(timeLeft, "s")
    .format("mm:ss", { trim: false })

  return (
    <div>
      <Banner id="timer-label">
        {timerLabel}
        <br />
        {formattedTimeLeft}
      </Banner>
      <Button onClick={handleStartStopClick}>{startStopButtonLabel}</Button>
    </div>
  )
}

export default TimeLeft
