import React, { useState, useEffect } from "react";
import { getData } from "../../services/fetch";
import Skeleton from "../PizzaBlock/Skeleton";
import PizzaItem from "../PizzaBlock/PizzaItem";
import Categories from "../Categories/Categories";
import Sort from "../Sort/Sort";

function Home() {
  const [pizzaData, setPizzaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPizzaData();
  }, []);

  const getPizzaData = () => {
    getData("https://63f8b2491dc21d5465c4eaf9.mockapi.io/items").then(
      onLoadPizza
    );
  };

  const onLoadPizza = (pizza) => {
    setPizzaData(pizza);
    setLoading(false);
  };
  return (
    <div className="container">
      <div className="content__top">
        <Categories />

        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, id) => <Skeleton key={id} />)
          : pizzaData.map((items) => <PizzaItem {...items} key={items.id} />)}
      </div>
    </div>
  );
}

export default Home;
