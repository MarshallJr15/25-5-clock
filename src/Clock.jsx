import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faArrowRight, faArrowUp, faArrowLeft, faArrowDown, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'


const Clock = () => {
  let [sessionLength, setSessionLength] = useState(25)
  let [breakLength, setBreakLength] = useState(5)
  let [totalTime, setTotalTime] = useState(sessionLength * 60)
  let [breakTime, setBreakTime] = useState(breakLength * 60)
  let [isPaused, setIsPaused] = useState(true)
  let [intervalId, setIntervalId] = useState('')
  let [sessionType, setSessionType] = useState('Session')

 // const beep = document.querySelector('#beep').innerHTML

  // define functions here 🌉
  function formatTime (t) {
    let clockifiedTime;

  
    let minutes = Math.floor(totalTime / 60)
    let seconds = t % 60
  
    let minutesStr = minutes < 10 ? `0` + minutes + ':' : minutes + ':'
    let secondsStr = seconds < 10 ? `0` + seconds : seconds
  
    clockifiedTime = `${minutesStr}` + `${secondsStr}`
    return clockifiedTime
  }
  function beginTime () {
    if (!isPaused) return // if isPaused is false, return => if timer is running
    setIsPaused(false)

  function tickerFunction () {    
    setTotalTime(totalTime -= 1) // this piece of cde allows timer to run every second

  //  when timer reacches zero
  if (totalTime <= 0) {
    pause()
    formatTime(totalTime)
    beep.play()
    //beep.currentTime = 0
   // after 2 seconds 
    setTimeout(() => {
    sessionControl()
    }, 2000)
    
  } else {
    formatTime(totalTime)
    setIntervalId(setTimeout(tickerFunction, 1000))
  };     
  }
  setIntervalId(setTimeout(tickerFunction, 1000))
}
  function decreaseSession () {
    if (sessionLength <= 1) {
      return
    } else {
      setSessionLength(sessionLength -= 1)
      setTotalTime(sessionLength * 60)
    }
  }
  function increaseSession () {    
    if (sessionLength >= 60) {
      return
    } else  {
      setSessionLength(sessionLength += 1)
      setTotalTime(sessionLength * 60 )   
    }
  }
  function increaseBreak () {
    if (breakLength >= 60) {
      return
    } else  {
      setBreakLength(breakLength += 1)
      setBreakTime(breakLength * 60)
    }
  }
  function decreaseBreak () {
    if (breakLength<= 1) {
      return
    } else  {
      setBreakLength(breakLength -= 1)
      setBreakTime(breakLength * 60)
    }
  }
  function reset () {
    setIsPaused(true)
    setBreakLength(5)
    setSessionLength(25)
    setTotalTime(25 * 60)
    setSessionType("Session")
    beep.pause(); 
    beep.currentTime = 0
    sessionControl()
  }
  function pause () {
    clearTimeout(intervalId)
    setIsPaused(true)
  }
  function sessionControl () {
    if (totalTime === 0 && sessionType === 'Session') {
      setSessionType("Break")
      setTotalTime(prevTime => prevTime + breakTime)
    } else if (totalTime === 0 && sessionType === 'Break') {
      setSessionType("Session")
      setTotalTime(prevTime => prevTime + (sessionLength * 60))
    }
  }
  function timerBuzeer () {
    beep.play()
  }
  return (
    <div>
      <main>
      <p className="clock-title">25 + 5 Clock</p>

      <div className='lengths'>
        <div className='session-control'>
          <p id="session-label">Session Length</p>
          <div className="lengths-controller">
            <button
              id="session-decrement" 
              className="adSL"
              onClick={decreaseSession}>
                <FontAwesomeIcon icon={faArrowDown} />
            </button>

            <div id="session-length" className="length-control">{sessionLength}</div>
            
            <button
              id="session-increment" 
              className="auSL"
              onClick={increaseSession}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
          
        </div>
        <div className="break-control">
          <p id="break-label">Break Length</p>
          <div className='lengths-controller'>
            <button
              id="break-decrement" 
              className="aDBS"
              onClick={decreaseBreak}>
                <FontAwesomeIcon icon={faArrowDown} />
            </button>
            <div id="break-length" className="break-length">{breakLength}</div>
            <button 
            id="break-increment" 
            className="aUBS"
            onClick={increaseBreak}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          </div>
        </div>
      </div>

      <div className="timer">
        <p id="timer-label">{sessionType}</p>
        <p id="time-left" className="display">{formatTime(totalTime)}</p>
      </div>

      <div className="functionButtons">
        <div id="start_stop">
          <button
           id="start_stop"
           className="fB play"
           onClick={isPaused ? beginTime : pause}>
            <FontAwesomeIcon icon={faPlay} />
            <FontAwesomeIcon icon={faPause} />
          </button>
        </div>
        <button 
        id="reset" 
        className="fB reset"
        onClick={reset}>
          <FontAwesomeIcon icon={faClockRotateLeft}/>
        </button>
      </div>

      <audio id="beep" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/BeepSound.wav"></audio>

      </main>
    </div>
  )
}

export default Clock








