import { render, fireEvent } from "@testing-library/react";
import PaginationList from "./PaginationList";

describe("<PaginationList />", () => {
  const defaultProps = {
    totalPages: 10,
    page: 1,
    onSelect: jest.fn(),
  };

  it("renders the correct number of PageButtons", () => {
    const { getAllByRole } = render(<PaginationList {...defaultProps} />);
    const pageButtons = getAllByRole("button");
    expect(pageButtons.length).toBe(7);
  });

  it("calls onSelect with the correct page number when a PageButton is clicked", () => {
    const { getAllByRole } = render(<PaginationList {...defaultProps} />);
    const pageButton = getAllByRole("button")[0];
    fireEvent.click(pageButton);
    expect(defaultProps.onSelect).toHaveBeenCalledWith(1);
  });
});
