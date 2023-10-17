const Pill = ({ label = "" }) => (
  <span className="flex text-xs p-1 px-2 rounded-full bg-gray-200 border border-gray-600 w-fit">
    {label}
  </span>
);

export default Pill;
