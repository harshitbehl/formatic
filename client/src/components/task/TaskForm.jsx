import React from "react";
import "./TaskForm.scss";

import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../../utils/helpers/taskFormValidation";
import TaskFormExtra from "./TaskFormExtra";

// Redux Imports
import { useDispatch } from "react-redux";
import { addEmployee } from "../../features/employee/employeeSlice";

function TaskForm() {
  // Redux Functions
  const dispatch = useDispatch();

  // Form Submit Handler
  const handleSubmit = (values, { resetForm }) => {
    // Send Data
    Object.keys(values).forEach((key) => {
      if (values[key] === "") {
        delete values[key];
      }
    });

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
    resetForm({ values: "" });
  };

  return (
    <Formik
      enableReinitialize
      initialValues={{
        country: "",
        firstName: "",
        lastName: "",
        birthDate: "",
        holidayAllowance: "",
        maritalStatus: "",
        socialInsuranceNumber: "",
        numberOfChildren: "",
        workingHours: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="task-form">
          <label htmlFor="country">Country Of Work</label>
          <Field as="select" name="country">
            <option value="">--Please choose a country--</option>
            <option value="Spain">Spain</option>
            <option value="Ghana">Ghana</option>
            <option value="Brazil">Brazil</option>
          </Field>
          <span className="task-form__error-message">
            <ErrorMessage name="country" />
          </span>

          <div className="task-form__double">
            <div className="task-form__double-left">
              <label htmlFor="firstName">First Name</label>
              <Field type="text" name="firstName" />
              <span className="task-form__error-message">
                <ErrorMessage name="firstName" />
              </span>
            </div>
            <div className="task-form__double-right">
              <label htmlFor="lastName">Last Name</label>
              <Field type="text" name="lastName" />
              <span className="task-form__error-message">
                <ErrorMessage name="lastName" />
              </span>
            </div>
          </div>

          <div className="task-form__double">
            <div className="task-form__double-left">
              <label htmlFor="birthDate">Date Of Birth</label>
              <Field type="date" name="birthDate" />
              <span className="task-form__error-message">
                <ErrorMessage name="birthDate" />
              </span>
            </div>
            <div className="task-form__double-right">
              <label htmlFor="holidayAllowance">Holiday Allowance</label>
              <Field type="number" name="holidayAllowance" />
              <span className="task-form__error-message">
                <ErrorMessage name="holidayAllowance" />
              </span>
            </div>
          </div>

          {/* Conditional Rendering Extra Fields */}
          {!values.country || <TaskFormExtra values={values} />}

          <button type="submit">Add Employee</button>
        </Form>
      )}
    </Formik>
  );
}

export default TaskForm;
