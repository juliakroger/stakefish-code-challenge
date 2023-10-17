import { render, fireEvent } from "@testing-library/react";
import PageButton from "./PageButton";

describe("<PageButton />", () => {
  const defaultProps = {
    pageValue: 1,
    currentPage: 1,
    onSelect: jest.fn(),
    disabled: false,
  };

  it("renders correctly", () => {
    const { container } = render(<PageButton {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it("calls onSelect when button is clicked", () => {
    const onSelectMock = jest.fn();
    const { getByRole } = render(
      <PageButton {...defaultProps} onSelect={onSelectMock} />
    );
    const button = getByRole("button");

    fireEvent.click(button);
    expect(onSelectMock).toHaveBeenCalled();
  });

  it("disables button when disabled prop is true", () => {
    const { getByRole } = render(
      <PageButton {...defaultProps} disabled={true} />
    );
    const button = getByRole("button");

    expect(button.disabled).toBe(true);
  });

  it("applies correct class names based on props", () => {
    const { getByRole, rerender } = render(<PageButton {...defaultProps} />);
    const button = getByRole("button");

    expect(button.classList.contains("bg-green-300")).toBe(true);
    expect(button.classList.contains("border-green-300")).toBe(true);
    expect(button.classList.contains("font-bold")).toBe(true);

    rerender(<PageButton {...defaultProps} currentPage={2} />);

    expect(button.classList.contains("bg-green-300")).toBe(false);
    expect(button.classList.contains("border-green-300")).toBe(false);
    expect(button.classList.contains("font-bold")).toBe(false);
    expect(button.classList.contains("bg-gray-300")).toBe(true);
    expect(button.classList.contains("border-gray-400")).toBe(true);
  });
});
