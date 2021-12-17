import React, { useState, useRef } from "react";
import Cards from "./Cards";

function DragDrop({ data }) {
	const [list, setList] = useState(data);
	const [dragging, setDragging] = useState(false);

	const dragItem = useRef();
	const dragNode = useRef();

	const handleDragStart = (e, params) => {
		console.log("drag starting", params);
		dragItem.current = params;
		dragNode.current = e.target;
		dragNode.current.addEventListener("dragend", handleDragEnd);

		setTimeout(() => {
			setDragging(true);
		}, 0);
	};

	const handleDragEnter = (e, params) => {
		console.log("Entering drag", params);
		const currentItem = dragItem.current;
		if (e.target !== dragNode.current) {
			console.log("Traget is not the same");
			setList((oldList) => {
				let newList = JSON.parse(JSON.stringify(oldList));
				newList[params.grpI].items.splice(
					params.itemI,
					0,
					newList[currentItem.grpI].items.splice(currentItem.itemI, 1)[0]
				);
				dragItem.current = params;
				return newList;
			});
		}
	};

	const handleDragEnd = () => {
		console.log("Ending Drag");
		setDragging(false);
		dragItem.current = null;
		dragNode.current.removeEventListener("dragend", handleDragEnd);
		dragNode.current = null;
	};

	const getStyles = (params) => {
		const currentItem = dragItem.current;
		if (
			currentItem.grpI === params.grpI &&
			currentItem.itemI === params.itemI
		) {
			return "current dnd_item";
		}
		return "dnd_item";
	};

	return (
		<div className="drag_n_drop">
			{list.map((grp, grpI) => (
				<div
					key={grp.title}
					className="dnd_group"
					onDragEnter={
						dragging && grp.items.length === 0
							? (e) => handleDragEnter(e, { grpI, itemI: 0 })
							: null
					}>
					<div className="group_title">{grp.title}</div>
					{grp.items.map((item, itemI) => (
						<div
							draggable
							onDragStart={(e) => handleDragStart(e, { grpI, itemI })}
							onDragEnter={
								dragging
									? (e) => {
											handleDragEnter(e, { grpI, itemI });
									  }
									: null
							}
							key={item}
							className={dragging ? getStyles({ grpI, itemI }) : "dnd_item"}>
							{item}
						</div>
					))}
				</div>
			))}
		</div>
	);
}

export default DragDrop;
