import React from "react";
import "./Home.scss";

import Showcase from "../../components/showcase/Showcase";
import Task from "../../components/task/Task";

function Home() {
  return (
    <div className="home">
      {/* Showcase Section */}
      <Showcase />
      {/* Task Section */}
      <Task />
    </div>
  );
}

export default Home;
