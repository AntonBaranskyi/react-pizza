import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";
import React from "react";

import { useDispatch } from "react-redux";
import { setPageNum } from "../../redux/slices/filtersSlice";

function Pagination() {
  const dispatch = useDispatch();

  const handlePageClick = (e) => {
    let page = +e.selected;
    dispatch(setPageNum(page + 1));
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
