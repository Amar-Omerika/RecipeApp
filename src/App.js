import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
	const APP_ID = "5352863c";
	const APP_KEY = "33bbcd330b2eb89dc2969873eba80d14";

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chicken");

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
	};
	const updateSearch = (e) => {
		setSearch(e.target.value);
		console.log(data.hits);
	};
	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
	};
	return (
		<div className="App">
			<form onSubmit={getSearch} className="search-form">
				<input
					type="text"
					className="search-bar"
					value={search}
					onChange={updateSearch}
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			{recipes.map((recipe) => (
				<Recipe
					key={recipe.recipe.lable}
					title={recipe.recipe.lable}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
				/>
			))}
		</div>
	);
};

export default App;
