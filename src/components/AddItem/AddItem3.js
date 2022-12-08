// import React, { useState, useEffect } from "react";
// import Button from "../Button/Button";

// export default function AddItem3() {
// 	const [comment, setComment] = useState("");
// 	const [comments, setComments] = useState([]);
// 	const [error, setError] = useState(false);
// 	const [name, setName] = useState();
// 	const [time, setTime] = useState([]);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		if (comment) {
// 			setError(false);
// 			let uniqueId =
// 				new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
// 			let newComment = {
// 				id: uniqueId,
// 				name: name,
// 				text: comment,
// 			};
// 			setComments([newComment, ...comments]);
// 			setName("");
// 			setComment("");
// 		} else {
// 			setError(true);
// 			setComment("");
// 		}
// 	};

// 	useEffect(() => {
// 		const comments = JSON.parse(localStorage.getItem("comments"));
// 		if (comments) {
// 			setComments(comments);
// 		}
// 	}, []);

// 	useEffect(() => {
// 		let addError = setTimeout(() => {
// 			setError(false);
// 		}, 2000);
// 		return () => {
// 			clearTimeout(addError);
// 		};
// 	}, [error]);

// 	useEffect(() => {
// 		localStorage.setItem("comments", JSON.stringify(comments));
// 	}, [comments]);

// 	let Today = new Date().toLocaleDateString("fi-FI", { weekday: "long" });
// 	let day = new Date().toLocaleDateString("fi-FI", { day: "numeric" });
// 	let month = new Date().toLocaleDateString("fi-FI", { month: "short" });

// 	return (
// 		<div className="app-container">
// 			<div className="header-section">
// 				<h4 className="date">
// 					{`${Today},`} <span>{`${day} ${month}`}</span>
// 				</h4>
// 				<div className="app-form-container">
// 					<form onSubmit={handleSubmit}>
// 						<input
// 							type="text"
// 							value={name}
// 							className={error ? "error" : ""}
// 							onChange={(e) => setTodoItem(e.target.value)}
// 							placeholder="Type your name"
// 						/>
// 						<input
// 							type="text"
// 							value={comment}
// 							className={error ? "error" : ""}
// 							onChange={(e) => setTodoItem(e.target.value)}
// 							placeholder="Type your comment"
// 						/>
// 						<button type="submit" className="btn">
// 							Add Comment
// 						</button>
// 					</form>
// 				</div>
// 				<div className="data-card-container">
// 					<div className="data-card">
// 						<h5>Time</h5>
// 					</div>
// 					<div className="data-card">
// 						<h5>Name</h5>
// 					</div>
// 					<div className="data-card">
// 						<h5>Comment</h5>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="comment-container">
// 				{comments.map((comment) => {
// 					const { id, name, text } = comment;
// 					return (
// 						<div key={id} className="comment-card">
// 							<p className="name">{name}</p>
// 							<p className="comment">{comment}</p>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// }
