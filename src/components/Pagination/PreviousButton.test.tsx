import { render, fireEvent } from "@testing-library/react";
import PreviousButton from "./PreviousButton";

describe("<PreviousButton />", () => {
  it("renders correctly", () => {
    const { container } = render(
      <PreviousButton selectPrevious={() => {}} disabled={false} />
    );
    expect(container).toMatchSnapshot();
  });

  it("calls selectPrevious when button is clicked", () => {
    const selectPreviousMock = jest.fn();
    const { getByRole } = render(
      <PreviousButton selectPrevious={selectPreviousMock} disabled={false} />
    );
    const button = getByRole("button") as HTMLButtonElement;
    fireEvent.click(button);
    expect(selectPreviousMock).toHaveBeenCalled();
  });

  it("applies correct class names based on disabled prop", () => {
    const { getByRole, rerender } = render(
      <PreviousButton selectPrevious={() => {}} disabled={false} />
    );
    let button = getByRole("button") as HTMLButtonElement;
    expect(button.classList.contains("hidden")).toBe(false);

    rerender(<PreviousButton selectPrevious={() => {}} disabled={true} />);
    button = getByRole("button") as HTMLButtonElement;
    expect(button.classList.contains("hidden")).toBe(true);
  });
});
