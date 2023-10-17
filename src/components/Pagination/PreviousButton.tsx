import cn from "@/utils/classnames";

interface Props {
  selectPrevious: () => void;
  disabled: boolean;
}

const PreviousButton = ({ selectPrevious, disabled }: Props) => (
  <li>
    <button
      onClick={selectPrevious}
      className={cn(
        disabled
          ? "hidden"
          : "flex items-center justify-center bg-gray-300 w-8 h-8 border border-gray-400 rounded"
      )}
    >
      <span className="sr-only">Previous</span>
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </li>
);

export default PreviousButton;
