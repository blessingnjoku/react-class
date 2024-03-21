import React, { useState } from 'react';
import CountdownCircleTimer from 'react-countdown-circle-timer';
import Sound from 'react-sound';
import { FaVolumeUp, FaVolumeMute } from 'react-icons';

const PomodoroApp = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [timerState, setTimerState] = useState('work');

  const startTimer = () => {
    setIsPlaying(true);
  };

  const handleComplete = () => {
    setIsPlaying(false);
    setTimeLeft(25 * 60);
    setTimerState(timerState === 'work' ? 'break' : 'work');
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setTimeLeft(25 * 60);
    setTimerState('work');
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="App">
      <h1>{timerState === 'work' ? 'Work' : 'Break'}</h1>
      <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={timeLeft}
        colors={[['#004777', 0.5], ['#F7B801', 0.5], ['#A30000']]}
        onComplete={handleComplete}
      >
        {({ remainingTime }) => (
          <div className="timer">
            <span className="time-left">
              {Math.floor(remainingTime / 60)}:{remainingTime % 60 < 10 ? '0' : ''}{remainingTime % 60}
            </span>
          </div>
        )}
      </CountdownCircleTimer>
      <div className="controls">
        {isPlaying ? (
          <button onClick={handlePause}>Pause</button>
        ) : (
          <button onClick={startTimer}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleMute}>
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
      <Sound
        url="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
        playStatus={isPlaying && !isMuted ? 'PLAYING' : 'STOPPED'}
        volume={50}
        onLoading={({ duration }) => console.log('Loading...', duration)}
        onPlaying={({ position }) => console.log('Playing...', position)}
        onFinishedPlaying={() => console.log('Finished playing')}
      />
    </div>
  );
};

export default PomodoroApp;