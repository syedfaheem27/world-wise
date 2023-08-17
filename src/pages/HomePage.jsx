import React from "react";
import PageNav from "../components/PageNav";
import { Link } from "react-router-dom";
import AppNav from "./AppNav";

const HomePage = () => {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">World Wise</h1>
      <Link to="/app">Go to the app</Link>
    </div>
  );
};

export default HomePage;
