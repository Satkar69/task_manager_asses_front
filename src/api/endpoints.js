const endpoints = {
  auth: {
    user: {
      login: "/task-manager/auth/user/login",
      register: `/task-manager/auth/user/register`,
    },
  },
  user: {
    task: {
      getAllTasks: "/task-manager/user/task/get-all",
      addNewTask: "/task-manager/user/task/add",
      getTask: "/task-manager/user/task/get/:id",
      updateTask: "/task-manager/user/task/update/:id",
      deleteTask: "/task-manager/user/task/delete/:id",
    },
  },
};

export default endpoints;
