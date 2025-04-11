import React from "react";
import Layout from "../components/layout/Layout";
import RegisterForm from "../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto py-8">
        <RegisterForm />
      </div>
    </Layout>
  );
};

export default RegisterPage;
