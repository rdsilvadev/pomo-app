import React from 'react';
import { Navbar } from "../../components/Navbar/Navbar";
import { AiOutlinePlus } from "../../Utils/icons";
import "./home.css";
import { TaskModal } from "../../components/TaskModal/TaskModal";
import { useTask } from "../../Context/task-context";
import { SingleTask } from "../../components/SingleTask/SingleTask";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const TasksPage = () => {
  const { showTaskModal, setShowTaskModal, state } = useTask();
  const [parent] = useAutoAnimate();
  return (
    <div>
      <Navbar />
      <div className="home-main-container">
        <div>
          <div>
            <h1>Welcome User !</h1>
            <h3>Add task one by one</h3>
          </div>
          <button className="floating-btn add-task-btn">
            <AiOutlinePlus onClick={() => setShowTaskModal(true)} />
          </button>
          <div className="all-tasks-container">
            <h2>Tasks</h2>
            <div className="all-single-tasks" ref={parent}>
              {state.tasks.map((item) => {
                return <SingleTask taskInfo={item} />;
              })}
            </div>
          </div>
        </div>
        {showTaskModal && <TaskModal setModal={setShowTaskModal} />}
      </div>
    </div>
  );
};
export { TasksPage };
