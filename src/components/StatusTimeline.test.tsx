import { render } from "@testing-library/react";
import StatusTimeline from "./StatusTimeline";

describe("<StatusTimeline />", () => {
  const mockUpdates = [
    {
      description: "Update 1",
      created_at: "2023-10-17T12:34:56Z",
    },
    {
      description: "Update 2",
      created_at: "2023-10-18T14:34:56Z",
    },
  ];

  it("renders status updates correctly", () => {
    const { getByText } = render(<StatusTimeline updates={mockUpdates} />);

    expect(getByText("Update 1")).toMatchSnapshot();
    expect(getByText("Update 2")).toMatchSnapshot();
  });

  it("displays formatted dates", () => {
    const { getByText } = render(<StatusTimeline updates={mockUpdates} />);

    expect(getByText("Tuesday, Oct 17, 2023")).toMatchSnapshot();
    expect(getByText("Wednesday, Oct 18, 2023")).toMatchSnapshot();
  });
});
