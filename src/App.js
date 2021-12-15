import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";

function App() {
	return (
		<div className="App">
			<Nav />
			<div
				style={{
					display: "flex",
					flexdirection: "column",
					"flex-wrap": "wrap",
				}}>
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
				<Cards />
			</div>
		</div>
	);
}

export default App;
