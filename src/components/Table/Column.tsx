import cn from "@/utils/classnames";

interface Props {
  id: string;
  customRender: any;
  item: any;
  className?: string;
  left?: boolean;
  right?: boolean;
}

const Column = ({ left, right, customRender, item, id, className }: Props) => (
  <div
    className={cn(
      "text-xs md:text-sm items-center flex",
      !left && !right ? "justify-center" : "",
      right ? "justify-end" : "",
      className
    )}
  >
    {customRender ? customRender(item[id], item) : item[id]}
  </div>
);

export default Column;
