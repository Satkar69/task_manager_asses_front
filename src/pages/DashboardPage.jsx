import React from "react";
import Layout from "../components/layout/Layout";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Task Dashboard</h1>
        This is Dashboard Page
        {/* <TaskProvider>
              <TaskForm />
              <TaskList />
            </TaskProvider> */}
      </div>
    </Layout>
  );
};

export default DashboardPage;
