import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";

import { getData } from "../../services/fetch";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaItem from "../PizzaBlock/PizzaItem";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/Pagination";
import { SearchContext } from "../../App";

function Home() {
  const { filterId, sort, pageNum } = useSelector((state) => state.filterReducer);

  const { searchValue } = useContext(SearchContext);
  const [pizzaData, setPizzaData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    getPizzaData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterId, sort, pageNum]);
  let categoriesCheck = filterId > 0;

  const getPizzaData = () => {
    setLoading(true);
    getData(
      `https://63f8b2491dc21d5465c4eaf9.mockapi.io/items?${
        categoriesCheck ? `category=${filterId}` : ""
      }${sort ? `&sortBy=${sort}` : ""}&page=${pageNum}&limit=3`
    ).then(onLoadPizza);
  };

  const onLoadPizza = (pizza) => {
    setPizzaData(pizza);
    setLoading(false);
  };

  

  const pizzaContent = pizzaData
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
        {loading ? skeletContent : pizzaContent}
      </div>
      <Pagination />
    </div>
  );
}

export default Home;
