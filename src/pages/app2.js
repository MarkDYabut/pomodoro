import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import ToDo from "../components/ToDo"

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
      <p>
        Efficiency:{" "}
        {Math.ceil(
          ((totalRun + runTime.ms) / (currentTime.ms - startTime.ms)) * 100
        )}
        %
      </p>
      <h1>To Do List</h1>
      <ToDo />
    </Layout>
  )
}
