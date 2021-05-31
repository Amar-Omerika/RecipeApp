import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
	const APP_ID = "5352863c";
	const APP_KEY = "33bbcd330b2eb89dc2969873eba80d14";

	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		getRecipes();
	}, []);

	const getRecipes = async () => {
		const response = await fetch(
			`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
		);
		const data = await response.json();
		setRecipes(data.hits);
		console.log(data.hits);
	};

	return (
		<div className="App">
			<form className="search-form">
				<input type="text" className="search-bar" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			{recipes.map((recipe) => (
				<Recipe
					title={recipe.recipe.lable}
					calories={recipe.recipe.calories}
					image={recipe.recipe.image}
				/>
			))}
		</div>
	);
};

export default App;
