import PreviousButton from "./PreviousButton";
import PaginationList from "./PaginationList";
import NextButton from "./NextButton";

interface Props {
  page: number;
  totalPages: number;
  onSelect: (page: number) => void;
  visible: boolean;
}

const Pagination = ({ page, totalPages, onSelect, visible }: Props) => {
  return visible ? (
    <ul className="flex items-center justify-center gap-1">
      <PreviousButton
        selectPrevious={() => onSelect(page - 1)}
        disabled={page === 1}
      />

      <PaginationList
        totalPages={totalPages}
        page={page}
        onSelect={(page: number) => onSelect(page)}
      />

      <NextButton
        selectNext={() => onSelect(page + 1)}
        disabled={page === totalPages}
      />
    </ul>
  ) : null;
};

export default Pagination;
