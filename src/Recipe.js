import React from "react";
import ReactDOM from "react-dom";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div>
			<h1>{title}</h1>
			<ol>
				{ingredients.map((ingredient) => (
					<li>{ingredient.text}</li>
				))}
			</ol>
			<p>{parseInt(calories)}Kcal</p>
			<img src={image} alt="" />
		</div>
	);
};
export default Recipe;
