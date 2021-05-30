import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
const App = () => {
	const APP_ID = "5352863c";
	const APP_KEY = "33bbcd330b2eb89dc2969873eba80d14";
	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log("triggered");
	});

	return (
		<div className="App">
			<form className="search-form">
				<input type="text" className="search-bar" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
			<h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
		</div>
	);
};

export default App;
