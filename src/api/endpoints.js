const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const endpoints = {
  auth: {
    user: {
      login: `${API_URL}/task-manager/auth/user/login`,
      register: `${API_URL}/task-manager/auth/user/register`,
    },
  },
  user: {
    task: {
      getAllTasks: `${API_URL}/task-manager/user/task/get-all`,
      addNewTask: `${API_URL}/task-manager/user/task/add`,
      getTask: `${API_URL}/task-manager/user/task/get/:id`,
      updateTask: `${API_URL}/task-manager/user/task/update/:id`,
      deleteTask: `${API_URL}/task-manager/user/task/delete/:id`,
    },
  },
};
