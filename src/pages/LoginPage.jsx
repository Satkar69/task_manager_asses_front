import React from "react";
import Layout from "../components/layout/Layout";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-8">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
