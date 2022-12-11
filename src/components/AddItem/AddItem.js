import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "../AddItem/AddItem.css";

export default function AddItem() {
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);
	const [name, setName] = useState("");
	const [commentEditing, setCommentEditing] = useState(null);
	const [editingText, setEditingText] = useState("");

	// Gets data from localStorage

	useEffect(() => {
		const comments = JSON.parse(localStorage.getItem("comments"));
		if (comments) {
			setComments(comments);
		}
	}, []);

	// Sets data as a key and value pair to localStorage

	useEffect(() => {
		localStorage.setItem("comments", JSON.stringify(comments));
	}, [comments]);

	// Defines a time variable which will give us the date and time of the comment added

	const time = new Date().toLocaleString();

	// Defines a function which will add the time, username and comment to the comments array when the form is submitted

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

	// Defines a function which allows us to edit the comments

	const editComment = (id) => {
		const updatedComments = [...comments].map((comment) => {
			if (comment.id === id) {
				comment.text = editingText;
			}
			return comment;
		});
		setComments(updatedComments);
		setCommentEditing(null);
		setEditingText("");
	};

	return (
		<div className="container">
			<h1 className="header">Sanoma App</h1>
			<form onSubmit={addComment} className={"form"}>
				<div>
					<label className="nameInputLabel" htmlFor="name">
						Name
					</label>
					<input
						required
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
					<textarea
						required
						maxLength={50}
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
			<table className="commentsContainer">
				<tbody>
					<tr className="heads">
						<th className="timeLabel">Time</th>
						<th className="nameLabel">Name</th>
						<th className="commentLabel">Comment</th>
					</tr>
					<tr className="comments">
						<td className="timeColumn">
							{comments?.map((time, i) => (
								<div className="timeContainer" key={i}>
									<td className="time">{time?.id}</td>
								</div>
							))}
						</td>
						<td className="nameColumn">
							{comments?.map((name, i) => (
								<div className="nameContainer" key={i}>
									<td className="userName">{name?.user}</td>
								</div>
							))}
						</td>
						<td className="commentColumn">
							{comments?.map((comment, i) => (
								<div className="commentContainer" key={i}>
									{commentEditing === comment?.id ? (
										<input
											maxLength={50}
											className="editInput"
											type="text"
											onChange={(e) => setEditingText(e.target.value)}
											value={editingText}
										/>
									) : (
										<td className="comment">{comment?.text}</td>
									)}
									<div className="buttonContainer">
										<button
											className="editButton"
											onClick={() => setCommentEditing(comment?.id)}
										>
											Edit
										</button>
										<button
											className="submitEditButton"
											onClick={() => editComment(comment?.id)}
										>
											Submit Edits
										</button>
									</div>
								</div>
							))}
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
