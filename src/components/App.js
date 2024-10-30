import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Display from "./Display"; // Ensure the path is correct

function App() {
  // Define state for filtering and sorting
  const [filter, setFilter] = useState("all");
  const [sortAttribute, setSortAttribute] = useState(null);

  // Function to handle filtering
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Function to handle sorting
  const handleSortChange = (attribute) => {
    setSortAttribute(attribute);
  };

  // Apply filter and sort to hogs data
  const filteredHogs = hogs.filter((hog) => {
    if (filter === "all") {
      return true;
    }
    return hog.greased === (filter === "greased");
  });

  const sortedHogs = filteredHogs.sort((a, b) => {
    if (!sortAttribute) return 0;
    if (a[sortAttribute] < b[sortAttribute]) return -1;
    if (a[sortAttribute] > b[sortAttribute]) return 1;
    return 0;
  });

  return (
    <div className="App">
      <Nav onFilterChange={handleFilterChange} onSortChange={handleSortChange} />
      <Display hogs={sortedHogs} /> {/* Pass the sorted hogs to Display */}
    </div>
  );
}

export default App;