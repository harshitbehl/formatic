import React from "react";
import "./TaskFormExtra.scss";

function TaskFormExtra({ handleChange, values }) {
  return (
    <div className="task-form-extra">
      <div className="task-form__double">
        <div className="task-form__double-left">
          {values.country === "Brazil" ? (
            <>
              <label htmlFor="workingHours">Working Hours</label>
              <input
                type="number"
                name="workingHours"
                onChange={handleChange}
                value={values.workingHours}
              />
            </>
          ) : (
            <>
              <label htmlFor="">Marital Status</label>
              <select
                name="maritalStatus"
                onChange={handleChange}
                value={values.maritalStatus}
              >
                <option value="">--Please choose--</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Separated">Separated</option>
                <option value="Divorced">Divorced</option>
              </select>
            </>
          )}
        </div>
        <div className="task-form__double-right">
          {values.country === "Spain" && (
            <>
              <label htmlFor="socialInsuranceNumber">
                Social Insurance Number
              </label>
              <input
                type="number"
                name="socialInsuranceNumber"
                onChange={handleChange}
                value={values.socialInsuranceNumber}
              />
            </>
          )}
          {values.country === "Ghana" && (
            <>
              <label htmlFor="numberOfChildren">Number Of Children</label>
              <input
                type="number"
                name="numberOfChildren"
                onChange={handleChange}
                value={values.numberOfChildren}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskFormExtra;
