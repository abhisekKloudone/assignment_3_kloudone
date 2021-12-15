import React from "react";
import { Card } from "antd";
import "./Cards.css";

function Cards() {
	return (
		<div className="cards">
			<Card
				title="Default size card"
				extra={
					<img
						style={{ width: "35px" }}
						src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png"
						alt=""
					/>
				}
				style={{ width: 300 }}>
				<p>Card content</p>
			</Card>
		</div>
	);
}

export default Cards;
