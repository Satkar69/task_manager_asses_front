import React from "react";
import { useTasks } from "../../../context/TaskContext";
import { FaTrash } from "react-icons/fa";

const TaskItem = ({ task }) => {
  const { removeTask } = useTasks();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      removeTask(task.id);
    }
  };

  return (
    <div className="card flex justify-between items-start">
      <div>
        <h3 className="text-lg font-medium">{task.title}</h3>
        <p className="text-gray-600 mt-1">{task.description}</p>
      </div>
      <button
        onClick={handleDelete}
        className="text-red-500 hover:text-red-700 focus:outline-none"
        aria-label="Delete task"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default TaskItem;
