import React from "react";
import logo from "./logo.svg";
import "./App.css";
const App = () => {
	const APP_ID = "5352863c";
	const APP_KEY = "33bbcd330b2eb89dc2969873eba80d14";
	const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;
	return (
		<div className="App">
			<h1>React hello</h1>
		</div>
	);
};

export default App;
