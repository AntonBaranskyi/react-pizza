import React, { useState, useEffect } from "react";
import { getData } from "../../services/fetch";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaItem from "../PizzaBlock/PizzaItem";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";
import Pagination from "../Pagination/Pagination";

function Home({ searchValue }) {
  const [pizzaData, setPizzaData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriesId, setCategoriesId] = useState(0);
  const [sortField, setSortField] = useState("");
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    getPizzaData();
  }, [categoriesId, sortField, pageNum]);
  let categoriesCheck = categoriesId > 0;

  const getPizzaData = () => {
    setLoading(true);
    getData(
      `https://63f8b2491dc21d5465c4eaf9.mockapi.io/items?${
        categoriesCheck ? `category=${categoriesId}` : ""
      }${sortField ? `&sortBy=${sortField}` : ""}&page=${pageNum}&limit=3`
    ).then(onLoadPizza);
  };

  const onLoadPizza = (pizza) => {
    setPizzaData(pizza);
    setLoading(false);
  };

  const updateSort = (term) => {
    setSortField(term);
  };

  const updatePage = (num) => setPageNum(num);

  const pizzaContent = pizzaData
    .filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((items) => <PizzaItem {...items} key={items.id} />);

  const skeletContent = [...new Array(6)].map((_, id) => <Skeleton key={id} />);
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoriesId}
          setCategoriesId={(id) => setCategoriesId(id)}
        />

        <Sort updateSort={(term) => updateSort(term)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading ? skeletContent : pizzaContent}
      </div>
      <Pagination updatePage={(num) => updatePage(num)} />
    </div>
  );
}

export default Home;
