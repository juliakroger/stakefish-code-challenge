import cn from "@/utils/classnames";

interface Props {
  selectNext: () => void;
  disabled: boolean;
}

const NextButton = ({ selectNext, disabled }: Props) => (
  <li>
    <button
      onClick={selectNext}
      disabled={disabled}
      className={cn(
        disabled
          ? "hidden"
          : "flex items-center justify-center bg-gray-200 w-8 h-8 border border-gray-300 rounded"
      )}
    >
      <span className="sr-only">Next</span>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </li>
);

export default NextButton;
