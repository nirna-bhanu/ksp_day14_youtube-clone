
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
function App() {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let intervel = useRef();



  const startTimer = () => {
    const countdownDate = new Date('Feb 08 2024 00:00:00').getTime();

    intervel.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance <= 0) {
        clearInterval(intervel.current);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(days < 10 ? `0${days}` : days.toString());
        setTimerHours(hours < 10 ? `0${hours}` : hours.toString());
        setTimerMinutes(minutes < 10 ? `0${minutes}` : minutes.toString());
        setTimerSeconds(seconds < 10 ? `0${seconds}` : seconds.toString());
      }
    }, 1000);
  };




  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(intervel.current);

    }
  })


  return (
    <section className='time-container'>
      <section className="timer">
        <div>
          <span className='mdi mdi-calendar-clock timer-icon'>

          </span>
          <h2>Countdown Timer</h2>
          <p>Countdown to a really special date. One you could or would never imagine </p>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>

          <span>:</span>

          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>

          <span>:</span>

          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>

          <span>:</span>

          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>

      </section>



    </section>


  );
}

export default App;
