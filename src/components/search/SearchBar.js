import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };
  return <input value={value} onChange={changeHandler} />;
};

export default SearchBar;
