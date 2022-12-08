import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import "../AddItem/AddItem.css";

export default function AddItem() {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);
	const [name, setName] = useState();
	const [commentEditing, setCommentEditing] = useState(null);
	const [editingComment, setEditingComment] = useState("");

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

	const time = new Date().toLocaleTimeString();

	const addComment = (e) => {
		e.preventDefault();
		console.log(comment);

		const newComment = {
			id: time,
			user: name,
			text: comment,
		};
		console.log(newComment);

		setComments([...comments].concat(newComment));
		setName("");
		setComment("");
	};

	const editComment = (id) => {
		const updatedComments = [...comments].map((comment) => {
			if (comment.id === id) {
				comment.comment = editingComment;
			}
			return comment;
		});
		setComments(updatedComments);
		setCommentEditing(null);
		setEditingComment("");
	};

	return (
		<div className="container">
			<form onSubmit={addComment} className={"form"}>
				<div>
					<label className="nameInputLabel" htmlFor="name">
						Name
					</label>
					<input
						className="nameInput"
						type="text"
						id="name"
						name="name"
						onChange={(e) => setName(e.target.value)}
						value={name}
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
						onChange={(e) => setComment(e.target.value)}
						value={comment}
					/>
				</div>
				<Button type="submit">Add Comment</Button>
			</form>
			<div className="commentsContainer">
				<div className="timeContainer">
					<label className="timeLabel" htmlFor="time">
						Time
					</label>
					{comments.map((time) => (
						<div key={time.id}>
							<div className="time">{time.id}</div>
						</div>
					))}
				</div>
				<div className="nameContainer">
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
					<label className="commentLabel" htmlFor="comment">
						Comment
					</label>
					<div>
						{comments.map((comment) => (
							<div key={comment.id}>
								{commentEditing === comment.id ? (
									<input
										className="editInput"
										type="text"
										onChange={(e) => setEditingComment(e.target.value)}
										value={editingComment}
									/>
								) : (
									<p className="comment">{comment.text}</p>
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
		</div>
	);
}
