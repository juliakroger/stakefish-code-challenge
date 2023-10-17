import Rank_1 from "./1";
import Rank_2 from "./2";
import Rank_3 from "./3";
import Rank_4 from "./4";
import Rank_5 from "./5";
import Rank_6 from "./6";
import Rank_7 from "./7";
import Rank_8 from "./8";
import Rank_9 from "./9";
import Rank_10 from "./10";

const getRankLogo = (rank: number) => {
  switch (rank) {
    case 1:
      return <Rank_1 />;
    case 2:
      return <Rank_2 />;
    case 3:
      return <Rank_3 />;
    case 4:
      return <Rank_4 />;
    case 5:
      return <Rank_5 />;
    case 6:
      return <Rank_6 />;
    case 7:
      return <Rank_7 />;
    case 8:
      return <Rank_8 />;
    case 9:
      return <Rank_9 />;
    case 10:
      return <Rank_10 />;
    default:
      return <Rank_1 />;
  }
};

const Rank = ({ rank = 1 }) => {
  return (
    <div className="flex flex-col items-center">
      {getRankLogo(rank)}
      <span className="hidden md:flex text-xs font-bold">Trust Score</span>
    </div>
  );
};

export default Rank;
