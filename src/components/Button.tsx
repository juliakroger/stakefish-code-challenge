import cn from "@/utils/classnames";

const BASE_CLASS = "p-2 px-5 rounded-full";

const STYLES = {
  default: "bg-[#192422] border border-[#313B3A]",
  active: "font-bold bg-[#2E9575] border border-[#09553D]",
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
