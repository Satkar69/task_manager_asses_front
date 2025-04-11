import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";
import { useAuth } from "../context/AuthContext";

const HomePage = () => {
  const { currentUser } = useAuth();

  return (
    <Layout>
      <div className="max-w-3xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Task Manager</h1>
        <p className="text-lg text-gray-600 mb-8">
          A simple application to help you manage your tasks effectively.
        </p>

        {currentUser ? (
          <Link to="/dashboard">
            <Button variant="primary">Go to Dashboard</Button>
          </Link>
        ) : (
          <div className="space-x-4">
            <Link to="/login">
              <Button variant="secondary">Login</Button>
            </Link>
            <Link to="/register">
              <Button variant="primary">Register</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HomePage;
