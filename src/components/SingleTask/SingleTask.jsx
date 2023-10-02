import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTask } from "../../Context/task-context";
import { AiOutlineClockCircle, FiEdit, MdDelete } from "../../Utils/icons";
import { TaskModal } from "../TaskModal/TaskModal";

const SingleTask = ({ taskInfo }) => {
  const { taskDispatch } = useTask();
  const [editTaskModal, setEditTaskModal] = useState(false);
  const { id, title, description, focusTime, breakTime } = taskInfo;
  const navigate = useNavigate();
  return (
    <div>
      {editTaskModal && (
        <TaskModal
          setEditModal={setEditTaskModal}
          editModal={editTaskModal}
          id={id}
          title={title}
          description={description}
          focusTime={focusTime}
          breakTime={breakTime}
        />
      )}
      <div className="single-task">
        <p>{title}</p>
        <div>
          <AiOutlineClockCircle
            className="filter-icon pomodoro-icons"
            onClick={() => navigate(`/tasks/${id}`)}
          />
          <FiEdit
            className="filter-icon pomodoro-icons"
            onClick={() => setEditTaskModal(true)}
          />
          <MdDelete
            className="filter-icon pomodoro-icons"
            onClick={() => taskDispatch({ type: "REMOVE_TASK", payload: id })}
          />
        </div>
      </div>
    </div>
  );
};
export { SingleTask };
