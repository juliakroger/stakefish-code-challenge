import { render, fireEvent } from "@testing-library/react";
import NextButton from "./NextButton";

describe("<NextButton />", () => {
  const defaultProps = {
    selectNext: jest.fn(),
    disabled: false,
  };

  it("renders correctly", () => {
    const { container } = render(<NextButton {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("calls selectNext when button is clicked", () => {
    const selectNextMock = jest.fn();
    const { getByRole } = render(
      <NextButton {...defaultProps} selectNext={selectNextMock} />
    );
    const button = getByRole("button");

    fireEvent.click(button);
    expect(selectNextMock).toHaveBeenCalled();
  });

  it("disables button when disabled prop is true", () => {
    const { getByRole } = render(
      <NextButton {...defaultProps} disabled={true} />
    );
    const button = getByRole("button");

    expect(button.disabled).toBe(true);
  });

  it("applies correct class names based on disabled prop", () => {
    const { getByRole, rerender } = render(<NextButton {...defaultProps} />);
    const button = getByRole("button");

    expect(button.classList.contains("bg-gray-300")).toBe(true);
    expect(button.classList.contains("border-gray-400")).toBe(true);

    rerender(<NextButton {...defaultProps} disabled={true} />);
    expect(button.classList.contains("hidden")).toBe(true);
  });
});
