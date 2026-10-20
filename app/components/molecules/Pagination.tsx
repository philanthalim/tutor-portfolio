type PaginationProps = {
  currentPage: number;
  pageCount: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  pageCount,
  onPageChange,
}: PaginationProps) {
  const pages: Array<number | "ellipsis"> = [];

  if (pageCount <= 5) {
    pages.push(...Array.from({ length: pageCount }, (_, index) => index + 1));
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("ellipsis");
    for (
      let page = Math.max(2, currentPage - 1);
      page <= Math.min(pageCount - 1, currentPage + 1);
      page += 1
    ) {
      pages.push(page);
    }
    if (currentPage < pageCount - 2) pages.push("ellipsis");
    pages.push(pageCount);
  }

  return (
    <nav aria-label="Results pages" className="page-controls">
      <button
        aria-label="Previous page"
        data-nav
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        type="button"
      >
        ‹ Previous
      </button>
      {pages.map((page, index) =>
        page === "ellipsis" ? (
          <span
            aria-hidden="true"
            className="page-ellipsis"
            key={`ellipsis-${index}`}
          >
            …
          </span>
        ) : (
          <button
            aria-label={
              page === currentPage
                ? `Page ${page}, current page`
                : `Go to page ${page}`
            }
            aria-current={page === currentPage ? "page" : undefined}
            key={page}
            onClick={() => onPageChange(page)}
            type="button"
          >
            {page}
          </button>
        ),
      )}
      <button
        aria-label="Next page"
        data-nav
        disabled={currentPage === pageCount}
        onClick={() => onPageChange(currentPage + 1)}
        type="button"
      >
        Next ›
      </button>
    </nav>
  );
}
