import ReactPaginate from "react-paginate";
import style from "./Pagination.module.scss";

import { useDispatch } from "react-redux";
import { setPageNum } from "../../redux/slices/filtersSlice";

function Pagination() {
  const dispatch = useDispatch();

  const handlePageClick = (e: any) => {
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
    />
  );
}

export default Pagination;
