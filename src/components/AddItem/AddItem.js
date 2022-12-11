import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import "../AddItem/AddItem.css";

export default function AddItem() {
	const [comment, setComment] = useState("");
	// const [time, setTime] = useState("");
	const [comments, setComments] = useState([]);
	const [name, setName] = useState("");
	const [commentEditing, setCommentEditing] = useState(null);
	const [editingText, setEditingText] = useState("");

	// const [comments, setComments] = useState(() =>
	// 	JSON.parse(localStorage.getItem("comments"))
	// );
	// useEffect(() => {
	// 	localStorage.setItem("comments", JSON.stringify(comments));
	// }, [comments]);

	useEffect(() => {
		const comments = JSON.parse(localStorage.getItem("comments"));
		if (comments) {
			setComments(comments);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("comments", JSON.stringify(comments));
	}, [comments]);

	const time = new Date().toLocaleString();

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
			{/* <div className="commentsContainer">
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
										onChange={(e) => setEditingText(e.target.value)}
										value={editingText}
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
			</div> */}
		</div>
	);
}
