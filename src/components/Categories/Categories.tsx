import React from "react";
import { useDispatch } from "react-redux";
import { setFilterId } from "../../redux/slices/filtersSlice";

interface ICategory {
  name: string;
}
const categoriesData: ICategory[] = [
  { name: "Все" },
  { name: "Мясные" },
  { name: "Вегетарианская" },
  { name: "Гриль" },
  { name: "Острые" },
  { name: "Закрытые" },
];

const Categories: React.FC<{ value: number }> = ({ value }) => {
  const dispatch = useDispatch();

  const onClickCategory = (index: number): void => {
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
              className={value === i ? "active" : ""}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
