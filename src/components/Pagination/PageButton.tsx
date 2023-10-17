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
          ? "bg-[#309575] border border-[#309575] font-bold"
          : "bg-[#1B2624] border border-[#26302F]",
        !disabled && currentPage !== pageValue ? "hover:bg-[#21473D]" : ""
      )}
    >
      {pageValue}
    </button>
  </li>
);

export default PageButton;
