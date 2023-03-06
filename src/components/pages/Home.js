import React, { useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import Skeleton from "../PizzaBlock/Skeleton";
import PizzaItem from "../PizzaBlock/PizzaItem";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/Pagination";
import { SearchContext } from "../../App";
import { fetchPizza } from "../../redux/slices/pizzaSlice";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

function Home() {
  const { filterId, sort, pageNum } = useSelector(
    (state) => state.filterReducer
  );
  const { items, status } = useSelector((state) => state.pizzaReducer);

  const disaptch = useDispatch();

  const { searchValue } = useContext(SearchContext);

  useEffect(() => {
    getPizzaData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterId, sort, pageNum]);
  let categoriesCheck = filterId > 0;

  const getPizzaData = () => {
    disaptch(
      fetchPizza({
        categoriesCheck,
        filterId,
        sort,
        pageNum,
      })
    );
  };

  const pizzaContent = items && items
    .filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((items) => <PizzaItem {...items} key={items.id} />);

  const skeletContent = [...new Array(3)].map((_, id) => <Skeleton key={id} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={filterId} />

        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "loading" ? skeletContent : pizzaContent}
        {status === "error" ? <ErrorMessage /> : null};
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
