import { getCoinPrice } from "@/queries/api";

const BitcoinCard = ({ btc = 0, label = "" }) => {
  const { data } = getCoinPrice("bitcoin");

  const result = btc * data?.bitcoin?.usd;

  return (
    <div className="bg-green-500 border border-gray-400 p-4 rounded w-full h-fit">
      <div className="flex items-center gap-1">
        <img
          className="w-6 h-6"
          src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
        />
        <span className="text-sm">Bitcoin</span>
        <span className="text-sm text-gray-100">(BTC)</span>
      </div>
      <div className="my-2 text-xl">
        {result
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(result)
          : "--"}
      </div>

      <div className="border-t text-gray-100 border-t border-gray-400 text-sm pt-2">
        {label}
      </div>
    </div>
  );
};

export default BitcoinCard;
