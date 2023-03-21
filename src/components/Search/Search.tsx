import { useRef } from "react";
import React from "react";
import styles from "./Search.module.scss";
import icon from "../../assets/close_icon.svg";

import { DebounceInput } from "react-debounce-input";

interface ISearch {
  searchValue: string;
  setSearchValue: (target: string) => void;
}
const Search: React.FC<ISearch> = ({ searchValue, setSearchValue }) => {
  const inputRef = useRef<DebounceInput>(null);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  };

  const closeSearch = (e: React.ChangeEvent<HTMLImageElement>): void => {
    setSearchValue("");
  };
  return (
    <div className={styles.root}>
      <DebounceInput
        debounceTimeout={500}
        ref={inputRef}
        type="text"
        value={searchValue}
        onChange={changeInput}
        className={styles.input}
        placeholder="Введите свою пиццу..."
      />

      {searchValue && (
        <img
          onClick={() => closeSearch}
          className={styles.icon}
          alt="close"
          src={icon}
        />
      )}
    </div>
  );
};

export default Search;
