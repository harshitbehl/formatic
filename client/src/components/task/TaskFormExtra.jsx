import React from "react";
import "./TaskFormExtra.scss";

import { Field, ErrorMessage } from "formik";

function TaskFormExtra({ values }) {
  return (
    <div className="task-form-extra">
      <div className="task-form__double">
        <div className="task-form__double-left">
          {values.country === "Brazil" ? (
            <>
              <label htmlFor="workingHours">Working Hours</label>
              <Field type="number" name="workingHours" />
              <span className="task-form__error-message">
                <ErrorMessage name="workingHours" />
              </span>
            </>
          ) : (
            <>
              <label htmlFor="maritalStatus">Marital Status</label>
              <Field as="select" name="maritalStatus">
                <option value="">--Please choose--</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
                <option value="Divorced">Divorced</option>
              </Field>
              <span className="task-form__error-message">
                <ErrorMessage name="maritalStatus" />
              </span>
            </>
          )}
        </div>
        <div className="task-form__double-right">
          {values.country === "Spain" && (
            <>
              <label htmlFor="socialInsuranceNumber">
                Social Insurance Number
              </label>
              <Field type="string" name="socialInsuranceNumber" />
              <span className="task-form__error-message">
                <ErrorMessage name="socialInsuranceNumber" />
              </span>
            </>
          )}
          {values.country === "Ghana" && (
            <>
              <label htmlFor="numberOfChildren">Number Of Children</label>
              <Field
                type="number"
                name="numberOfChildren"
                id="numberOfChildren"
              />
              <span className="task-form__error-message">
                <ErrorMessage name="numberOfChildren" />
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskFormExtra;
