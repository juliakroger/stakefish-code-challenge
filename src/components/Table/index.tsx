import { useMemo, useState } from "react";
import cn from "@/utils/classnames";
import { getPaginatedData, getTotalPages } from "@/utils/pagination";
import Button from "@/components/Button";
import Pagination from "@/components/Pagination/index";
import Column from "./Column";

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
  paginated = false,
}: Props) => {
  const [page, setPage] = useState(1);

  const { totalPages, paginatedData } = useMemo(
    () => ({
      paginatedData: paginated ? getPaginatedData(data, page, 10) : data,
      totalPages: getTotalPages(data?.length, 10),
    }),
    [data, page]
  );

  return (
    <div className="md:p-4 w-full">
      <div className="mt-2 mb-4 md:bg-green-600 md:border border-gray-500 rounded-xl">
        {title ? (
          <div className="flex justify-center md:justify-between items-center border-b border-gray-500 p-3 gap-10">
            <div className="flex">{title}</div>
            {filters ? (
              <div className="flex items-center gap-1 text-xs">
                {filters?.map((filter) => (
                  <Button
                    key={filter.id}
                    buttonType={
                      filter.id === activeFilter ? "active" : "default"
                    }
                    label={filter.label}
                  />
                ))}
              </div>
            ) : null}
          </div>
        ) : null}

        {isLoading || !data?.length ? (
          <div className="flex justify-center p-4">
            {isLoading ? "Loading..." : "No available Data."}
          </div>
        ) : (
          paginatedData.map((item: any) => (
            <div
              onClick={onClick ? () => onClick(item) : () => {}}
              key={item.id}
              className={cn(
                `md:grid grid-cols-4 p-4 m-2 md:m-0 bg-green-500 md:bg-transparent md:border-b border-green-500 last:border-0 rounded-xl md:rounded-none`,
                onClick ? "md:hover:bg-gray-700 md:cursor-pointer" : ""
              )}
            >
              <div className="md:hidden `w-full">
                <Column
                  id={columns[0].id}
                  customRender={columns[0].customRender}
                  item={item}
                  left
                />

                <div className="flex justify-between pt-2 mt-3 border-t border-gray-400">
                  {columns
                    .filter((_, index) => index !== 0)
                    .map(({ right, id, customRender, className }, index) => (
                      <Column
                        id={id}
                        customRender={customRender}
                        left={index === 0}
                        right={right}
                        item={item}
                        className={className}
                      />
                    ))}
                </div>
              </div>

              {columns.map(({ id, left, right, customRender }) => (
                <Column
                  id={id}
                  customRender={customRender}
                  item={item}
                  right={right}
                  left={left}
                  className="hidden md:flex"
                />
              ))}
            </div>
          ))
        )}
      </div>

      {paginated ? (
        <div className="flex justify-center mb-4">
          <Pagination
            page={page}
            totalPages={totalPages}
            onSelect={(page: number) => [setPage(page), window.scrollTo(0, 0)]}
            visible={!isLoading}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Table;
