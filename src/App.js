import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

function App() {
	return (
		<div className="App">
			<Nav />
			<Cards />
			<Cards />
			<Cards />
		</div>
	);
}

export default App;
