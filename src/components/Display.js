import React, { useState } from "react";

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
    console.log(`${hog.name} was clicked`);
  };

  return (
    <div onClick={handleCardClick} >
      <h2>{hog.name}</h2>
      <img src={hog.image} alt={hog.name} />
      {showDetails && (
        <div>
          <p>Specialty: {hog.specialty}</p>
          <p>Weight: {hog.weight} kg</p>
          <p>Greased: {hog.greased ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

function Display({ hogs }) { // Accept hogs as a prop
  return (
    <div>
      {hogs.map((hog, index) => (
        <HogCard key={index} hog={hog} />
      ))}
    </div>
  );
}

export default Display;