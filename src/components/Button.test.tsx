import { render } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("renders correctly with default type", () => {
    const { container } = render(<Button label="Click me" />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with active type", () => {
    const { container } = render(
      <Button buttonType="active" label="Click me" />
    );
    expect(container).toMatchSnapshot();
  });

  it("renders label correctly", () => {
    const { getByText } = render(<Button label="Click me" />);
    expect(getByText("Click me")).toBeTruthy();
  });

  it("applies default styles", () => {
    const { getByText } = render(<Button label="Click me" />);
    const button = getByText("Click me");
    expect(button.classList.contains("bg-gray-200")).toBe(true);
    expect(button.classList.contains("border-gray-600")).toBe(true);
  });

  it("applies active styles", () => {
    const { getByText } = render(
      <Button buttonType="active" label="Click me" />
    );
    const button = getByText("Click me");
    expect(button.classList.contains("font-bold")).toBe(true);
    expect(button.classList.contains("bg-green-200")).toBe(true);
    expect(button.classList.contains("border-green-100")).toBe(true);
  });
});
