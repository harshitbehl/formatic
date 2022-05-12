import React from "react";
import "./Task.scss";

import formContainerWave from "../../assets/svg/formContainerWave.svg";
import TaskForm from "./TaskForm";

function Task() {
  return (
    <section className="task" id="task-section">
      <div className="task__container main-container">
        <h2 className="task__title section-title">Employee Onboarding</h2>
        <p className="task__subtitle">Onboarding Global Talent</p>
        <div className="task__form-container">
          <div className="task__form-content">
            <img
              className="task__background-wave"
              src={formContainerWave}
              alt="Form Container Wave"
            />
            <h3 className="task__form-title">Employee Onboarding</h3>
            <TaskForm />
          </div>
          <div className="task__form-graphic"></div>
        </div>
      </div>
    </section>
  );
}

export default Task;
