import { createContext, useContext, useState, useEffect } from "react";
import { getAllTasks, addNewtask, deleteTask } from "../api/user/user-task";

import { useAuth } from "./AuthContext";

const TaskContext = createContext();

export const useTasks = () => {
  return useContext(TaskContext);
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { currentUser } = useAuth();

  const fetchTasks = async () => {
    if (!currentUser) {
      setTasks([]);
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      setError(null);
      const response = await getAllTasks();
      setTasks(response.data);
    } catch (err) {
      setError(err.message || "Failed to fetch tasks");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [currentUser]);

  const addTask = async (title, description) => {
    try {
      setError(null);
      const response = await addNewtask(title, description);
      setTasks((prevTasks) => [...prevTasks, response.data]);
      return true;
    } catch (err) {
      setError(err.message || "Failed to add task");
      return false;
    }
  };

  const removeTask = async (taskId) => {
    try {
      setError(null);
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
      return true;
    } catch (err) {
      setError(err.message || "Failed to delete task");
      return false;
    }
  };

  const value = {
    tasks,
    loading,
    error,
    addTask,
    removeTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
