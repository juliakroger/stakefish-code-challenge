import cn from "@/utils/classnames";

interface Props {
  pageValue: number | string;
  currentPage: number;
  onSelect: () => void;
  disabled: boolean;
}

const PageButton = ({ pageValue, currentPage, onSelect, disabled }: Props) => (
  <li>
    <button
      disabled={disabled}
      onClick={onSelect}
      className={cn(
        "w-8 h-8 flex items-center justify-center text-white rounded",
        currentPage === pageValue
          ? "bg-green-300 border border-green-300 font-bold"
          : "bg-gray-300 border border-gray-400",
        !disabled && currentPage !== pageValue ? "hover:bg-green-400" : ""
      )}
    >
      {pageValue}
    </button>
  </li>
);

export default PageButton;
