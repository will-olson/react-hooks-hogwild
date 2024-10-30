import React from "react";
import {useState} from "react"
import piggy from "../assets/porco.png";

const Nav = ({ onFilterChange, onSortChange }) => {
	return (
	  <div className="navWrapper">
		<span className="headerText">HogWild</span>
		<div className="TwirlyPig">
		  <img src={piggy} className="App-logo" alt="piggy" />
		</div>
		<span className="normalText">
		  A React App for County Fair Hog Fans
		</span>
  
		{/* Filter Controls */}
		<div>
		  <label>Filter by Greased: </label>
		  <select onChange={(e) => onFilterChange(e.target.value)}>
			<option value="all">All</option>
			<option value="greased">Greased</option>
			<option value="nongreased">Non-Greased</option>
		  </select>
		</div>
  
		{/* Sort Controls */}
		<div>
		  <label>Sort by: </label>
		  <select onChange={(e) => onSortChange(e.target.value)}>
			<option value="">None</option>
			<option value="weight">Weight</option>
			<option value="name">Name</option>
		  </select>
		</div>
	  </div>
	);
  };
  
  export default Nav;
