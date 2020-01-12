import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;

  var pageCount = itemCount / pageSize;
  if (pageCount === 1) return null;
  var items = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {items.map(page => (
          <li
            className={page == currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};
export default Pagination;
