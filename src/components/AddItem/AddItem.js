import React, { useState, useContext } from "react";
import Button from "../Button/Button";
import "../AddItem/AddItem.css";

export default function AddItem() {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);
	const [name, setName] = useState([]);
	const [commentEditing, setCommentEditing] = useState(null);
	const [editingComment, setEditingComment] = useState("");
	// const [comment, setComment] = useState("");

	// const ctx = useContext(CommentContext);

	// const changeHandler = (e) => {
	// 	const { name, value } = e.target;

	// 	setItem((prevState) => ({
	// 		...prevState,
	// 		[name]: value,
	// 	}));
	// 	console.log(item);
	// };

	// const addHandler = (e) => {
	// 	e.preventDefault();
	// 	ctx.addItem(item);
	// };

	const id = new Date().toLocaleString("fi-FI");

	const addHandler = (e) => {
		e.preventDefault();
		console.log(comment);

		const newComment = {
			id: id,
			user: name,
			text: comment,
		};

		setComments([...comments].concat(newComment));
		setName("");
		setComment("");
	};

	const editComment = (id) => {
		const updatedComments = [...comments].map((comment) => {
			if (comment.id === id) {
				comment.text = editingComment;
			}
			return comment;
		});
		setComments(updatedComments);
		setCommentEditing(null);
		setEditingComment("");
	};

	return (
		<div className="container">
			<form onSubmit={addHandler} className={"form"}>
				<div>
					<label className="nameInputLabel" htmlFor="name">
						Name
					</label>
					<input
						className="nameInput"
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<label className="commentInputLabel" htmlFor="comment">
						Comment
					</label>
					<input
						className="commentInput"
						type="text"
						id="comment"
						name="comment"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
				</div>
				<Button type="submit">Add Comment</Button>
			</form>
			<div className="commentsContainer">
				<div className="timeContainer">
					{/* <div> */}
					<label className="timeLabel" htmlFor="time">
						Time
					</label>
					{comments.map((id) => (
						<div key={id.id}>
							<div className="time">{id.id}</div>
						</div>
					))}
				</div>
				<div className="nameContainer">
					{/* <div> */}
					<label className="nameLabel" htmlFor="name">
						Username
					</label>
					{comments.map((name) => (
						<div key={name.id}>
							<div className="userName">{name.user}</div>
						</div>
					))}
				</div>
				<div className="commentContainer">
					{/* <div> */}
					<label className="commentLabel" htmlFor="comment">
						Comment
					</label>
					{comments.map((comment) => (
						<div key={comment.id}>
							{commentEditing === comment.id ? (
								<input
									type="text"
									onChange={(e) => setEditingComment(e.target.value)}
									value={editingComment}
								/>
							) : (
								<div className="comment">{comment.text}</div>
							)}
							<div className="buttonContainer">
								<button
									className="editButton"
									onClick={() => setCommentEditing(comment.id)}
								>
									Edit
								</button>
								<button
									className="submitEditButton"
									onClick={() => editComment(comment.id)}
								>
									Submit Edits
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
