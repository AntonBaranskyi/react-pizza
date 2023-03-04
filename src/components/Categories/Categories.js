import React from "react";
import { useDispatch } from "react-redux";
import { setFilterId } from "../../redux/slices/filtersSlice";

const categoriesData = [
  { name: "Все" },
  { name: "Мясные" },
  { name: "Вегетарианская" },
  { name: "Гриль" },
  { name: "Острые" },
  { name: "Закрытые" },
];

export default function Categories({ value }) {
  const dispatch = useDispatch();

  const onClickCategory = (index) => {
    dispatch(setFilterId(index));
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
