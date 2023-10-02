import React from 'react';
import "./taskModal.css";
import { MdOutlineCancel } from "../../Utils/icons";
import { v4 as uuid } from "uuid";
import { useTask } from "../../Context/task-context";
import { useState } from "react";
const TaskModal = ({
  setModal,
  id,
  title,
  description,
  focusTime,
  breakTime,
  editModal,
  setEditModal,
}) => {
  const { state, taskDispatch } = useTask();
  const [taskInput, setTaskInput] = useState({
    id,
    title,
    description,
    focusTime,
    breakTime,
  });
  const addTask = () => {
    if (editModal) {
      const editedTask = state.tasks.map((item) => {
        return item.id === taskInput.id ? taskInput : item;
      });
      taskDispatch({ type: "EDIT_TASK", payload: editedTask });
      setEditModal(false);
    } else {
      taskDispatch({ type: "ADD_TASK", payload: { ...taskInput, id: uuid() } });
      setTaskInput({
        title: "",
        description: "",
        foucsTime: "",
        breakTime: "",
      });
      setModal(false);
    }
  };
  return (
    <div className="task-main-container">
      <MdOutlineCancel
        className="filter-icon pomodoro-icons cancel-icon"
        onClick={() => (editModal ? setEditModal(false) : setModal(false))}
      />
      <div className="task-details">
        <h3>Enter Task</h3>
        <input
          type="text"
          className="pomodoro-task-input"
          placeholder="Enter Task"
          value={taskInput.title}
          required
          onChange={(e) =>
            setTaskInput({ ...taskInput, title: e.target.value })
          }
        />
      </div>
      <div className="task-details">
        <h3>Enter Description</h3>
        <input
          type="text"
          className="pomodoro-task-input"
          placeholder="Enter Description"
          value={taskInput.description}
          required
          onChange={(e) =>
            setTaskInput({ ...taskInput, description: e.target.value })
          }
        />
      </div>
      <div className="task-details">
        <h3>Enter Focus Time</h3>
        <input
          type="number"
          className="pomodoro-task-input"
          placeholder="Enter Focus Time"
          value={taskInput.focusTime}
          min="1"
          required
          onChange={(e) =>
            setTaskInput({ ...taskInput, focusTime: e.target.value })
          }
        />
      </div>
      <div className="task-details">
        <h3>Enter Break Time</h3>
        <input
          type="number"
          className="pomodoro-task-input"
          placeholder="Enter Break Time"
          value={taskInput.breakTime}
          required
          min="1"
          onChange={(e) =>
            setTaskInput({ ...taskInput, breakTime: e.target.value })
          }
        />
      </div>
      <button className="pomodoro-btn create-task" onClick={() => addTask()}>
        {editModal ? "Update" : "Add"}
      </button>
    </div>
  );
};
export { TaskModal };
