import { render } from "@testing-library/react";
import { getCoinPrice } from "@/queries/api";
import BitcoinCard from "./BitcoinCard";

jest.mock("@/queries/api", () => ({
  getCoinPrice: jest.fn(),
}));

describe("<BitcoinCard />", () => {
  const mockData = {
    bitcoin: {
      usd: 60000,
    },
  };

  beforeAll(() => {
    getCoinPrice.mockReturnValue({ data: mockData });
  });

  it("renders correctly", () => {
    const { container } = render(<BitcoinCard btc={1} label="Label" />);
    expect(container).toMatchSnapshot();
  });

  it("displays the correct Bitcoin value in USD", () => {
    const { getByText } = render(<BitcoinCard btc={1} label="Label" />);
    const expectedValue = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(mockData.bitcoin.usd);
    expect(getByText(expectedValue)).toBeTruthy(); // Use toBeTruthy instead of toBeInTheDocument
  });

  it("displays '--' when result is falsy", () => {
    const { getByText } = render(<BitcoinCard btc={0} label="Label" />);
    expect(getByText("--")).toBeTruthy(); // Use toBeTruthy instead of toBeInTheDocument
  });
});
