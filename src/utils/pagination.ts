export const getPageIndices = (
  currentPage: number,
  itemsPerPage: number,
  totalItems: number
) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  return { startIndex, endIndex };
};

export const getTotalPages = (pageSize: number, itemsPerPage: number) =>
  Math.ceil(pageSize / itemsPerPage);

export const getPaginatedData = (
  data: null | any[],
  page: number,
  itemsPerPage: number
) => {
  const { startIndex, endIndex } = getPageIndices(
    page,
    itemsPerPage,
    data?.length || 0
  );

  return data?.slice(startIndex, endIndex) || [];
};
