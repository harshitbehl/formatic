import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeData: {},
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employeeData = action.payload;
    },
  },
});

// Actions
export const { addEmployee } = employeeSlice.actions;

// Reducer
export default employeeSlice.reducer;
