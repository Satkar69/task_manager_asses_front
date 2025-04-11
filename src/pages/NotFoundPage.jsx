import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Button from "../components/ui/Button";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="max-w-md mx-auto text-center py-16">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <Link to="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
