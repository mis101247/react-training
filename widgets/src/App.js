import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why is React?",
    content: "React is a Favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The color Red",
    value: "red",
  },
  {
    label: "The color Green",
    value: "green",
  },
  {
    label: "The color Blue",
    value: "blue",
  },
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {/* <Accordion items={items}></Accordion> */}
      {/* <Search></Search> */}
      {showDropdown && (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        ></Dropdown>
      )}
    </div>
  );
};
