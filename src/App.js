import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const App = () => {
	const APP_ID = "5352863c";
	const APP_KEY = "33bbcd330b2eb89dc2969873eba80d14";

	useEffect(() => {
		getRecipes();
	}, []);
	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		console.log(data);
	};

	return (
		<div className="App">
			<form className="search-form">
				<input type="text" className="search-bar" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default App;
