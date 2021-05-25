// Analog Clock

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(setDate, 1000);

  setDate();

  // Digital Clock

  let digitalClock = () => {
    let digitalDate = new Date();
    let digitalHrs = digitalDate.getHours();
    let digitalMins = digitalDate.getMinutes();
    let digitalSecs = digitalDate.getSeconds();
    let period = "AM";
    if (digitalHrs == 0) {
      digitalHrs = 12;
    } else if (digitalHrs >= 12) {
      digitalHhrs = digitalHrs - 12;
      period = "PM";
    }
    digitalHhrs = digitalHhrs < 10 ? "0" + digitalHhrs : digitalHrs;
    digitalMins = digitalMins < 10 ? "0" + digitalMins : digitalMins;
    digitalSecs = digitalSecs < 10 ? "0" + digitalSecs : digitalSecs;
  
    let digitalTime = `${digitalHrs}:${digitalMins}:${digitalSecs}:${period}`;
    document.getElementById("digital-clock").innerText = digitalTime;
    setTimeout(digitalClock, 1000);
  };
  
  digitalClock();