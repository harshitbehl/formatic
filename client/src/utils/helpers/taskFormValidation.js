import * as yup from "yup";

// Validation Schema Using Yup
const validationSchema = yup.object().shape({
  country: yup.string().required("Country is required"),
  firstName: yup
    .string()
    .required("First name is required")
    .max(64, "Must not exceed 64 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .max(64, "Must not exceed 64 characters"),
  birthDate: yup.date().required("Birth date is required"),
  holidayAllowance: yup
    .number()
    .required("Holiday allowance is required")
    .positive("Value must be positive")
    .when("country", {
      is: (value) => value && value === "Spain",
      then: yup.number().min(30, "Minimum allowance is 30 days"),
    })
    .when("country", {
      is: (value) => value && value === "Brazil",
      then: yup.number().max(40, "Maximum allowance is 40 days"),
    }),
  maritalStatus: yup
    .string()
    .when("country", {
      is: (value) => value && value === "Spain",
      then: yup.string().required("Marital status is required"),
    })
    .when("country", {
      is: (value) => value && value === "Ghana",
      then: yup.string().required("Marital status is required"),
    }),
  socialInsuranceNumber: yup.string().when("country", {
    is: (value) => value && value === "Spain",
    then: yup
      .string()
      .required("Social Insurance is required")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(9, "Must be exactly 9 digits")
      .max(9, "Must be exactly 9 digits"),
  }),
  numberOfChildren: yup.number().when("country", {
    is: (value) => value && value === "Ghana",
    then: yup
      .number()
      .required("Number of children is required")
      .min(0, "Value must be positive"),
  }),
  workingHours: yup.number().when("country", {
    is: (value) => value && value === "Brazil",
    then: yup
      .number()
      .required("Working hours is required")
      .max(40, "Maximum working hours is 40")
      .positive("Value must be positive"),
  }),
});

export default validationSchema;

// USED FOR SCHEMA VALIDATION PURPOSE ONLY
// validationSchema
//   .validate({
//     country: "Brazil",
//     workingHours: 2,
//     holidayAllowance: 2,
//   })
//   .catch((err) => console.log(err));
