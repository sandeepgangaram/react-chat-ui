import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ filterData }) => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    filterData(e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="search-bar">
      <input placeholder="Search" value={value} onChange={changeHandler} />;
    </div>
  );
};

export default SearchBar;
