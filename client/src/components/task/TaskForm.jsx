import React, { useState } from "react";
import "./TaskForm.scss";

// Redux Imports
import { useDispatch } from "react-redux";
import { addEmployee } from "../../features/employee/employeeSlice";

function TaskForm() {
  const [values, setValues] = useState({
    country: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    holidayAllowance: "",
  });

  // Redux Functions
  const dispatch = useDispatch();

  // Input Change Handler
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Form Submit Handler
  const handleSubmit = (e) => {
    // Prevent Default Browser Behavior On Submit
    e.preventDefault();

    // Send Data
    try {
      console.log({
        method: "post",
        url: "/api/v1/employees",
        data: values,
        header: { "Content-Type": "multipart/form-data" },
      });
    } catch (error) {
      console.log(error);
    }

    // Updating Redux State & Dispatching Action
    dispatch(addEmployee({ ...values }));

    // Clear Fields After Form Submission
    setValues({
      country: "",
      firstName: "",
      lastName: "",
      birthDate: "",
      holidayAllowance: "",
    });
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <label htmlFor="country">Country Of Work</label>
      <select
        id="country"
        name="country"
        onChange={handleChange}
        value={values.country}
      >
        <option value="">--Please choose a country--</option>
        <option value="Spain">Spain</option>
        <option value="Ghana">Ghana</option>
        <option value="Brazil">Brazil</option>
      </select>
      <div className="task-form__double">
        <div className="task-form__double-left">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
          />
        </div>
        <div className="task-form__double-right">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            value={values.lastName}
          />
        </div>
      </div>
      <div className="task-form__double">
        <div className="task-form__double-left">
          <label htmlFor="birthDate">Date Of Birth</label>
          <input
            type="date"
            name="birthDate"
            onChange={handleChange}
            value={values.birthDate}
          />
        </div>
        <div className="task-form__double-right">
          <label htmlFor="holidayAllowance">Holiday Allowance</label>
          <input
            type="number"
            name="holidayAllowance"
            onChange={handleChange}
            value={values.holidayAllowance}
          />
        </div>
        <TaskFormExtra />
      </div>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default TaskForm;
