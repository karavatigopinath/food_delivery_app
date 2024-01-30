import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import Contact from "../Contact";

describe("Contact Us UI Test cases", () => {
    render(<Contact />);
  it("Contact screen is loaded", () => {
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Contact input name", () => {
    render(<Contact />);
    const placeholder = screen.getByPlaceholderText("name");
    expect(placeholder).toBeInTheDocument();
  });

  it("Contact button is present", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("Contact Submit is Text", () => {
    render(<Contact />);
    const submit = screen.getByText("Submit");
    expect(submit).toBeInTheDocument();
  });

  it("Should load two input boxes", () => {
    render(<Contact />);
    const inputs = screen.getAllByRole("textbox");
    expect(inputs.length).toBe(2);
  });
});
