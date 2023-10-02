import React from 'react';
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { v4 as uuid } from "uuid";
import { useReducer } from "react";
import { taskReducer } from "./task-reducer";
import { useEffect } from "react";


const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [mode, setMode] = useState("work");

  const [state, taskDispatch] = useReducer(taskReducer, {
    tasks: JSON.parse(localStorage.getItem("tasks")) ?? [],
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
  }, [state]);
  return (
    <TaskContext.Provider
      value={{
        showTaskModal,
        setShowTaskModal,
        state,
        taskDispatch,
        mode,
        setMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

const useTask = () => useContext(TaskContext);

export { TaskProvider, useTask };
