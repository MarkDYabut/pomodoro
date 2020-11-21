import React, { useState, useEffect, useRef } from "react"
import Layout from "../components/layout"
import styled from "styled-components"

const Quotes = styled.div`
  font-style: italic;
`

export default function Home() {
  const [status, setStatus] = useState("Initialize")
  const [startTime, setStartTime] = useState({ ms: 0 })
  const [currentTime, setCurrentTime] = useState({ ms: 0 })
  const [checkPoint, setCheckPoint] = useState({ runPoint: 0, pausePoint: 0 })
  const [runTime, setRunTime] = useState({ ms: 0 })
  const [pauseTime, setPauseTime] = useState({ ms: 0 })
  const [totalRun, setTotalRun] = useState(0)
  const [totalPause, setTotalPause] = useState(0)
  useEffect(() => {
    if (status === "Running") {
      setRunTime({ ms: currentTime.ms - checkPoint.runPoint })
    } else if (status === "Paused") {
      setPauseTime({ ms: currentTime.ms - checkPoint.pausePoint })
    }
  }, [currentTime])
  const run = () => {
    const date = new Date().getTime()
    setCurrentTime({ ms: date })
  }
  const handleStateButton = () => {
    if (status === "Initialize") {
      const start = new Date().getTime()
      setStartTime({
        ms: start,
      })
      setInterval(run, 100)
      setCheckPoint({ runPoint: new Date().getTime() })
      setStatus("Running")
    } else if (status === "Running") {
      setCheckPoint({ pausePoint: currentTime.ms })
      setTotalRun(totalRun => totalRun + runTime.ms)
      setRunTime({ ms: 0 })
      setStatus("Paused")
    } else if (status === "Paused") {
      setCheckPoint({ runPoint: currentTime.ms })
      setTotalPause(totalPause => totalPause + pauseTime.ms)
      setPauseTime({ ms: 0 })
      setStatus("Running")
    } else {
      console.log("error state")
    }
  }
  return (
    <Layout>
      <h1>State: {status}</h1>
      <button onClick={handleStateButton}>Change State</button>

      <p>
        Elapsed Time:{" "}
        {Math.floor(
          (Math.ceil((currentTime.ms - startTime.ms) / 1000) / 3600) % 60
        )}
        :
        {Math.floor(Math.ceil((currentTime.ms - startTime.ms) / 1000) / 60) %
          60}
        :{Math.ceil((currentTime.ms - startTime.ms) / 1000) % 60}
      </p>
      <p>
        Run Time: {Math.floor((Math.ceil(runTime.ms / 1000) / 3600) % 60)}:
        {Math.floor(Math.ceil(runTime.ms / 1000) / 60) % 60}:
        {Math.ceil(runTime.ms / 1000) % 60}
      </p>
      <p>
        Pause Time: {Math.floor((Math.ceil(pauseTime.ms / 1000) / 3600) % 60)}:
        {Math.floor(Math.ceil(pauseTime.ms / 1000) / 60) % 60}:
        {Math.ceil(pauseTime.ms / 1000) % 60}
      </p>
      <p>
        Total Run Time: {Math.floor((Math.ceil(totalRun / 1000) / 3600) % 60)}:
        {Math.floor(Math.ceil(totalRun / 1000) / 60) % 60}:
        {Math.ceil(totalRun / 1000) % 60}
      </p>
      <p>
        Total Pause Time:{" "}
        {Math.floor((Math.ceil(totalPause / 1000) / 3600) % 60)}:
        {Math.floor(Math.ceil(totalPause / 1000) / 60) % 60}:
        {Math.ceil(totalPause / 1000) % 60}
      </p>
      {/* <Quotes>
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
      </Quotes> */}
    </Layout>
  )
}
