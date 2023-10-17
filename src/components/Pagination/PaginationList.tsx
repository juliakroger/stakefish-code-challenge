import PageButton from "./PageButton";

interface Props {
  totalPages: number;
  page: number;
  onSelect: (page: number) => void;
}

const generatePagination = (page = 1, totalPages = 1) => {
  const pages = [];

  for (let i = 1; i <= Math.min(totalPages, 5); i++) {
    pages.push(i);
  }

  if (totalPages > 5) {
    pages.push("...");
    pages.push(totalPages);
  }

  if (totalPages && page > 5) {
    pages[0] = page === totalPages && page > 3 ? page - 5 : page - 4;
    pages[1] = page === totalPages && page > 3 ? page - 4 : page - 3;
    pages[2] = page === totalPages && page > 3 ? page - 3 : page - 2;
    pages[3] = page === totalPages && page > 3 ? page - 2 : page - 1;
    pages[4] = page === totalPages && page > 3 ? page - 1 : page;
  }

  if (pages[4] === totalPages - 1) {
    const index = pages.indexOf("...");
    pages.splice(index, 1);
  }

  return pages;
};

const PaginationList = ({ totalPages, page, onSelect }: Props) => {
  const pages = generatePagination(page, totalPages);

  const newPages = pages.map((x, pageIndex) => {
    const pageNumber = typeof x === "number" ? x : 0;
    const pageValue = x;
    return (
      <PageButton
        disabled={x === "..." ? true : false}
        key={`page-${pageIndex}`}
        pageValue={pageValue}
        currentPage={page}
        onSelect={() => onSelect(pageNumber)}
      />
    );
  });

  return <>{newPages}</>;
};

export default PaginationList;
