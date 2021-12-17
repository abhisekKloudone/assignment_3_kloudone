import React from "react";
import { Card } from "antd";
import "./Cards.css";

function Cards({ onDragStart, onDragEnter }) {
	return (
		<div className="cards">
			<Card
				title="Title"
				extra={
					<img
						style={{ width: "50px" }}
						src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png"
						alt=""
					/>
				}
				style={{ width: 500 }}>
				<p>Card content</p>
			</Card>
		</div>
	);
}

export default Cards;
