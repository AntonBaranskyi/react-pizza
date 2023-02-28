import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";
import React from "react";

function Pagination({ updatePage }) {
  const handlePageClick = (e) => {
    let page = +e.selected;
    updatePage(page + 1);
  };
  return (
    <ReactPaginate
      className={style.root}
      breakLabel="..."
      nextLabel=" >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="< "
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
