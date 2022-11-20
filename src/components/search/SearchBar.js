import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ filterData }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    filterData(e.target.value);
    setValue(e.target.value);
  };
  return <input value={value} onChange={changeHandler} />;
};

export default SearchBar;
