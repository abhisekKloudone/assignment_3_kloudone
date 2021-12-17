import React from "react";
import "./App.css";
import DragDrop from "./components/DragDrop";

const data = [
	{
		title: "IDEAS",
		items: ["Ideas 1", "Ideas 2", "Ideas 3", "Ideas 4", "Ideas 5"],
	},
	{ title: "TASK PROPOSED", items: ["Task 1", "Task 2"] },
	{ title: "TASK ASSIGNED", items: ["Task 3", "Task 4", "Task5"] },
	{
		title: "TASK COMPLETED",
		items: ["Task 3 completed", "Task 4 completed", "Task5 completed"],
	},
];
function App() {
	return (
		<div className="App">
			<DragDrop data={data} />
		</div>
	);
}

export default App;
