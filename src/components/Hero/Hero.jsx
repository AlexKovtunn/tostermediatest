import { useEffect, useRef, useState } from 'react';
import './Hero.scss';

const Hero = () => {
  const [time, setTime] = useState('04:51:16');
  const Ref = useRef(null);

  const startTimer = () => {
    if (Ref.current) clearInterval(Ref.current);

    Ref.current = setInterval(() => {
      setTime((prevTime) => {
        const [hours, minutes, seconds] = prevTime.split(':').map(Number);

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(Ref.current);
          return prevTime;
        }

        const newSeconds = seconds === 0 ? 59 : seconds - 1;
        const newMinutes =
          seconds === 0 && minutes === 0 ? 59 : seconds === 0 ? minutes - 1 : minutes;
        const newHours =
          seconds === 0 && minutes === 0 && hours === 0
            ? 23
            : seconds === 0 && minutes === 0
            ? hours - 1
            : hours;

        const newTime = `${newHours.toString().padStart(2, '0')}:${newMinutes
          .toString()
          .padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;

        return newTime;
      });
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="hero__flex">
          <div className="flexCol hero__timer">
            <span className="hero__timer-offer">Limited offer</span>
            <div className="hero__timer-time">{time}</div>
          </div>

          <div className="flexCol hero__price">
            <div className="hero__price-prev">R 250.00</div>
            <div className="hero__price-current">R 160.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
