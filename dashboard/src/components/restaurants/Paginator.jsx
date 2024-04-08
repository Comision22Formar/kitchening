import PropTypes from "prop-types";

export const Paginator = ({
  total,
  count,
  pages,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="d-flex justify-content-between">
    <div>
      <p><span>{count} de {total}</span></p>
    </div>
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page.number}
            className={`page-item ${page.number == currentPage && "active"}`}
          >
            <a
              className="page-link"
              href="#"
              onClick={() => setCurrentPage(page.number)}
            >
              {page.number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    </div>
  );
};

Paginator.propTypes = {
  total: PropTypes.number,
  count: PropTypes.number,
  pages: PropTypes.array,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
