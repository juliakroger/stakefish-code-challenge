import cn from "@/utils/classnames";
import Button from "@/components/Button";

interface Props {
  title?: string;
  isLoading: boolean;
  data: any[];
  columns: any[];
  onClick?: (row: any) => void;
  paginated?: boolean;
  filters?: { id: string; label: string }[];
  activeFilter?: string;
}

const Table = ({
  columns,
  data,
  onClick,
  title,
  filters,
  activeFilter,
  isLoading,
}: Props) => {
  return (
    <div className="mt-2">
      <div className="mt-2 mb-4 p-2 bg-[#0A1614] border border-[#242F2D] rounded-xl w-full">
        {title ? (
          <div className="flex justify-center md:justify-between items-center border-b border-[#242F2D] p-3 gap-10">
            <div className="flex">{title}</div>
            <div className="flex items-center gap-1 text-xs">
              {filters?.map((filter) => (
                <Button
                  key={filter.id}
                  buttonType={filter.id === activeFilter ? "active" : "default"}
                  label={filter.label}
                />
              ))}
            </div>
          </div>
        ) : null}
        {isLoading || !data?.length ? (
          <div className="flex justify-center p-4">
            {isLoading ? "Loading..." : "No available Data."}
          </div>
        ) : (
          data.map((item: any) => (
            <div
              onClick={onClick ? () => onClick(item) : () => {}}
              key={item.id}
              className={cn(
                `grid grid grid-cols-${columns.length} p-4 border-b border-[#16211F] last:border-0`,
                onClick ? "md:hover:bg-[#1A2726] md:cursor-pointer" : ""
              )}
            >
              {columns.map(({ id, left, right, customRender }) => (
                <div
                  className={cn(
                    "text-sm flex items-center",
                    !left && !right ? "justify-center" : "",
                    right ? "justify-end" : ""
                  )}
                >
                  {customRender ? customRender(item[id], item) : item[id]}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Table;
