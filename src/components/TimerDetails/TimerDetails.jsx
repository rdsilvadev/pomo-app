import React from 'react';
import "../Timer/timer.css";
const TimerDetails = ({ currentTask }) => {
  return (
    <div className="timer-container">
      <div className="single-task-info">
        <div>
          <h1>Title : {currentTask.title}</h1>
          <h3>Description : {currentTask.description}</h3>
          <h2>Time : {currentTask.focusTime} Minutes</h2>
          <h2>Break : {currentTask.breakTime} Minutes</h2>
        </div>
      </div>
    </div>
  );
};
export { TimerDetails };
