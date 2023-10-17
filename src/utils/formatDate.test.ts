import formatDate from "./formatDate";

describe("utils/formatDate", () => {
  it("Should format time correctly", () => {
    expect(formatDate("2020-10-27T08:40:53.429Z")).toBe(
      "Tuesday, Oct 27, 2020"
    );
  });

  it("Should handle different date formats", () => {
    const formattedDate = formatDate("2021-12-15T12:30:45.678Z");
    expect(formattedDate).toBe("Wednesday, Dec 15, 2021");
  });

  it("Should handle invalid input", () => {
    const formattedDate = formatDate("invalidDate");
    expect(formattedDate).toBe("Invalid Date");
  });
});
