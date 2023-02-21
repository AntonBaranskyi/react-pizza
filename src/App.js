import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import PizzaItem from "./components/PizzaItem/PizzaItem";

import pizzaData from "./pizzas.json";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />

              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzaData.map(({ title, price, types, imageUrl, sizes }) => {
                return (
                  <PizzaItem
                    title={title}
                    price={price}
                    types={types}
                    image={imageUrl}
                    sizes={sizes}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
