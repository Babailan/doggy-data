import React from "react";
import styles from "./style.module.css";

const SearchBox = ({ setState, onSearch }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type={"text"}
        placeholder={"Find a dog"}
        onChange={(e) => setState(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onSearch();
          }
        }}
      ></input>
      <span
        className={"material-symbols-outlined" + " " + styles.searchIcon}
        onClick={onSearch}
      >
        search
      </span>
    </div>
  );
};

export default SearchBox;
