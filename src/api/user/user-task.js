import endpoints from "../endpoints";
import api from "../axios";

export const getAllTasks = async () => {
  try {
    const response = await api.get(endpoints.user.task.getAllTasks);
    return response.data;
  } catch (error) {
    // Check if the error has a response from the server
    if (error.response) {
      // Extract the error message from the devException format
      const errorData = error.response.data;
      const errorMessage = errorData.message || "Error getting the tasks.";

      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error(
        "No response received from server. Please check your connection."
      );
    } else {
      throw new Error("Error setting up request: " + error.message);
    }
  }
};

export const addNewtask = async (title, description) => {
  try {
    const response = await api.post(endpoints.user.task.addNewTask, {
      title,
      description,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Extract the error message from the devException format
      const errorData = error.response.data;
      const errorMessage = errorData.message || "Failed to add new task.";

      // You can also access other properties if needed
      // const statusCode = errorData.statusCode;
      // const stackTrace = errorData.stackTrace;

      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error(
        "No response received from server. Please check your connection."
      );
    } else {
      throw new Error("Error setting up request: " + error.message);
    }
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await api.delete(
      endpoints.user.task.deleteTask.replace(":id", taskId)
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      // Extract the error message from the devException format
      const errorData = error.response.data;
      const errorMessage = errorData.message || "Error deleting the task.";

      throw new Error(errorMessage);
    } else if (error.request) {
      throw new Error(
        "No response received from server. Please check your connection."
      );
    } else {
      throw new Error("Error setting up request: " + error.message);
    }
  }
};
