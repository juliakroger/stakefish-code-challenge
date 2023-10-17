import cn from "@/utils/classnames";

const BASE_CLASS = "p-2 px-5 rounded-full";

const STYLES = {
  default: "bg-gray-200 border border-gray-600",
  active: "font-bold bg-green-200 border border-green-100",
};

interface Props {
  buttonType?: "default" | "active";
  label: string;
}

const Button = ({ buttonType = "default", label }: Props) => {
  return (
    <button className={cn(BASE_CLASS, STYLES[buttonType])}>{label}</button>
  );
};

export default Button;
