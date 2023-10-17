import { getPageIndices, getTotalPages, getPaginatedData } from "./pagination";

describe("utils/paginationUtils", () => {
  describe("getPageIndices", () => {
    it("Should calculate start and end indices correctly", () => {
      const currentPage = 2;
      const itemsPerPage = 10;
      const totalItems = 25;

      const indices = getPageIndices(currentPage, itemsPerPage, totalItems);

      expect(indices).toEqual({ startIndex: 10, endIndex: 20 });
    });

    it("Should handle edge case of first page", () => {
      const currentPage = 1;
      const itemsPerPage = 10;
      const totalItems = 25;

      const indices = getPageIndices(currentPage, itemsPerPage, totalItems);

      expect(indices).toEqual({ startIndex: 0, endIndex: 10 });
    });

    it("Should handle edge case of last page", () => {
      const currentPage = 3;
      const itemsPerPage = 10;
      const totalItems = 25;

      const indices = getPageIndices(currentPage, itemsPerPage, totalItems);

      expect(indices).toEqual({ startIndex: 20, endIndex: 25 });
    });

    it("Should handle cases where there are less items than itemsPerPage", () => {
      const currentPage = 1;
      const itemsPerPage = 30;
      const totalItems = 20;

      const indices = getPageIndices(currentPage, itemsPerPage, totalItems);

      expect(indices).toEqual({ startIndex: 0, endIndex: 20 });
    });
  });

  describe("getTotalPages", () => {
    it("Should calculate total pages correctly", () => {
      const pageSize = 100;
      const itemsPerPage = 10;

      const totalPages = getTotalPages(pageSize, itemsPerPage);

      expect(totalPages).toBe(10);
    });

    it("Should handle cases where pageSize is less than itemsPerPage", () => {
      const pageSize = 5;
      const itemsPerPage = 10;

      const totalPages = getTotalPages(pageSize, itemsPerPage);

      expect(totalPages).toBe(1);
    });
  });

  describe("getPaginatedData", () => {
    it("Should return the correct paginated data", () => {
      const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const page = 2;
      const itemsPerPage = 3;

      const paginatedData = getPaginatedData(data, page, itemsPerPage);

      expect(paginatedData).toEqual([4, 5, 6]);
    });

    it("Should handle cases where data is empty", () => {
      const page = 1;
      const itemsPerPage = 10;

      const paginatedData = getPaginatedData(null, page, itemsPerPage);

      expect(paginatedData).toEqual([]);
    });
  });
});
