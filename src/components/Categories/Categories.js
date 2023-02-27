import React, { useState } from "react";

const categoriesData = [
  { name: "Все" },
  { name: "Мясные" },
  { name: "Вегетарианская" },
  { name: "Гриль" },
  { name: "Острые" },
  { name: "Закрытые" },
];

export default function Categories({ value, setCategoriesId }) {
  const onClickCategory = (index) => {
    setCategoriesId(index);
  };
  return (
    <div className="categories">
      <ul>
        {categoriesData.map(({ name }, i) => {
          return (
            <li
              onClick={() => onClickCategory(i)}
              key={i}
              className={value === i ? "active" : null}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
