import React from "react";
import styles from "./Search.module.scss";
import icon from "../../assets/close_icon.svg";

function Search({ searchValue, setSearchValue }) {
  return (
    <div className={styles.root}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
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
