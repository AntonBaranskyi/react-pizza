import { useRef } from "react";
import React from "react";
import styles from "./Search.module.scss";
import icon from "../../assets/close_icon.svg";

import { DebounceInput } from "react-debounce-input";
function Search({ searchValue, setSearchValue }) {
  const inputRef = useRef();

  const changeInput = (e)=>{
    setSearchValue(e.target.value)
    console.log(e.target.value);
  }
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
          onClick={() => setSearchValue("")}
          className={styles.icon}
          alt="close"
          src={icon}
        />
      )}
    </div>
  );
}

export default Search;
