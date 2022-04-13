import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TaskForm from "./TaskForm";

describe("TaskForm Fields Rendering", () => {
  test("form fields should be rendered", () => {
    render(<TaskForm />);

    // First Name
    const firstName = screen.getByPlaceholderText("John");
    expect(firstName).toBeInTheDocument();

    // Last Name
    const lastName = screen.getByPlaceholderText("Doe");
    expect(lastName).toBeInTheDocument();

    // Holiday Allowance
    const holidayAllowance = screen.getByPlaceholderText("30");
    expect(holidayAllowance).toBeInTheDocument();
  });
});
