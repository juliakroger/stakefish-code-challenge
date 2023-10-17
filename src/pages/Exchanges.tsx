import { getListOfExchanges } from "@/queries/api";
import Rank from "@/icons/Ranks/index";
import ExternalLink from "@/icons/ExternalLink";
import Table from "@/components/Table";
import { useNavigate } from "react-router-dom";

const Exchanges = () => {
  const navigate = useNavigate();
  const { isLoading, data } = getListOfExchanges();

  const columns = [
    {
      id: "name",
      left: true,
      customRender: (name: string, row: any) => (
        <div className="flex items-center gap-2">
          <img src={row.image} alt={row.id} className="w-8 rounded-full" />
          <span className="text-xl md:text-sm font-bold">{name}</span>
        </div>
      ),
    },
    {
      id: "country",
      className: "w-2/4",
    },
    {
      id: "trust_score",
      customRender: (trustScore: number) => <Rank rank={trustScore} />,
    },
    {
      id: "url",
      right: true,
      customRender: (url: string) => (
        <a
          className="font-bold flex items-center gap-1 underline"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink />
          <span className="hidden md:flex truncate max-w-[200px]">{url}</span>
        </a>
      ),
    },
  ];

  return (
    <div>
      <Table
        title="Top Crypto Exchanges Listed by Rank"
        isLoading={isLoading}
        data={data}
        columns={columns}
        onClick={(row: any) => navigate(`/${row.id}`)}
        paginated
        // filters={[
        //   { id: "all", label: "All" },
        //   { id: "favorites", label: "Favorites" },
        // ]}
        // activeFilter="all"
      />
    </div>
  );
};

export default Exchanges;
