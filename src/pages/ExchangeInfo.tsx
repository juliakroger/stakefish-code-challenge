import BitcoinCard from "@/components/BitcoinCard";
import LinkButton from "@/components/LinkButton";
import Pill from "@/components/Pill";
import StatusTimeline from "@/components/StatusTimeline";
import Table from "@/components/Table";
import Arrow from "@/icons/Arrow";
import Rank from "@/icons/Ranks";
import { getExchangeInfo } from "@/queries/api";
import { useNavigate, useParams } from "react-router-dom";

const ExchangeInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isLoading, data } = getExchangeInfo(id);

  const columns = [
    {
      id: "base",
      customRender: (base: string, row: any) => (
        <span className="text-base md:text-sm">
          {base}/{row.target}
        </span>
      ),
      left: true,
    },
    {
      id: "converted_last",
      customRender: (last: any) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(last.usd),
    },
    {
      id: "bid_ask_spread_percentage",
      customRender: (amount: number) => `${amount.toFixed(2)}%`,
    },
    {
      id: "converted_volume",
      customRender: (volume: any) =>
        new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(volume.usd),
      right: true,
    },
  ];

  return (
    <div className="p-4">
      <div className="px-4">
        <button
          onClick={() => navigate("..")}
          className="flex items-center gap-1 text-sm bg-green-200 p-2 px-4 rounded"
        >
          <Arrow />
          Go Back
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center p-6">Loading...</div>
      ) : (
        <>
          <div className="p-4">
            <div className="w-full">
              <div className="flex justify-between md:items-center gap-24">
                <div className="flex md:items-center gap-2">
                  <img
                    src={data?.image}
                    alt={data?.id}
                    className="w-10 h-10 rounded"
                  />

                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <span className="lg:text-3xl font-bold">
                      {data?.name} ({data?.year_established})
                    </span>

                    <Pill
                      label={
                        data?.centralized ? "CENTRALIZED" : "DECENTRALIZED"
                      }
                    />
                  </div>
                </div>

                <Rank rank={data?.trust_score} />
              </div>
            </div>

            <div className="md:flex justify-between md:mt-4 gap-4">
              <div className="py-6 text-sm text-gray-100">
                {data?.description || (
                  <span>
                    For more details and information about this exchange go to{" "}
                    <a
                      href={data?.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-400 hover:text-blue-500"
                    >
                      this link
                    </a>
                    .
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-4 items-center md:w-60">
                <BitcoinCard
                  btc={data?.trade_volume_24h_btc}
                  label="24h Trading Volume"
                />

                <div className="flex gap-2 text-white">
                  <LinkButton url={data?.url} />
                  <LinkButton url={data?.facebook_url} />
                  <LinkButton url={data?.reddit_url} />
                  <LinkButton url={data?.telegram_url} />
                  <LinkButton url={data?.slack_url} />
                  <LinkButton
                    url={
                      data?.twitter_handle
                        ? `https://twitter.com/${data.twitter_handle}`
                        : ""
                    }
                  />
                  <LinkButton url={data?.other_url_1} />
                  <LinkButton url={data?.other_url_2} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 mt-6">
            <Table
              isLoading={isLoading}
              data={data?.tickers}
              columns={columns}
              paginated
            />

            <StatusTimeline updates={data?.status_updates} />
          </div>
        </>
      )}
    </div>
  );
};

export default ExchangeInfo;
