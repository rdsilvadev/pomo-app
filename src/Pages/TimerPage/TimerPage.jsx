import React from 'react';
import { useParams } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";
import { Timer } from "../../components/Timer/Timer";
import { TimerDetails } from "../../components/TimerDetails/TimerDetails";
import { useTask } from "../../Context/task-context";
import "./timerPage.css";
const TimerPage = () => {
  const params = useParams();
  const { state } = useTask();
  const currentTask = state.tasks.find((task) => task.id === params.id);
  return (
    <div>
      <Navbar />
      <div className="main-container timer-with-details">
        <Timer
          focusTime={currentTask.focusTime}
          breakTime={currentTask.breakTime}
        />
        <TimerDetails currentTask={currentTask} />
      </div>
    </div>
  );
};
export { TimerPage };
