import React, { useState } from "react";

const data = [
  "React",
  "Redux",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "GraphQL",
  "TypeScript",
  "Tailwind CSS",
  "Chakra UI",
  
];

export default function AutoCompleteSearch() {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
  
    const handleChange = (e) => {
      const value = e.target.value;
      setSearch(value);
  
      if (value.trim() === "") {
        setSuggestions([]);
      } else {
        const filteredData = data.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredData);
      }
    };
  
    return (
      <div className="min-h-screen w-full bg-black text-white flex justify-center items-center">
        <div className="p-4 max-w-md w-full">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded"
          />
          {suggestions.length > 0 && (
            <ul className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 mt-1 rounded shadow-lg">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white"
                  onClick={() => setSearch(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
  
