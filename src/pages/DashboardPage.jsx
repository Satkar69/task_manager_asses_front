import React from "react";
import Layout from "../components/layout/Layout";
import TaskForm from "../components/user/user-task/TaskForm";
import TaskList from "../components/user/user-task/TaskList";
import { TaskProvider } from "../context/TaskContext";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </div>
    </Layout>
  );
};

export default DashboardPage;
