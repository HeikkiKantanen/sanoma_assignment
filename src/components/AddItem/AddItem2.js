// import React, { useState, useEffect } from "react";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { db } from "../../firebase-config";
// import Button from "../Button/Button";

// export default function AddItem2() {
// 	const [comment, setComment] = useState("");
// 	const [comments, setComments] = useState([]);
// 	const [name, setName] = useState();

// 	const addComment = async (e) => {
// 		e.preventDefault();

// 		try {
// 			const docRef = await addDoc(collection(db, "test2"), {
// 				timestamp: timestamp,
// 				name: name,
// 				comment: comment,
// 			});
// 			setName("");
// 			setComment("");
// 			console.log("Document written with ID: ", docRef.id);
// 		} catch (e) {
// 			console.log("Error adding document: ", e);
// 		}
// 	};

// 	const fetchPost = async () => {
// 		await getDocs(collection(db, "test2")).then((querySnapshot) => {
// 			const newData = querySnapshot.docs.map((doc) => ({
// 				...doc.data(),
// 				id: doc.id,
// 			}));
// 			setComments(newData);
// 			console.log(comments, newData);
// 		});
// 	};

// 	useEffect(() => {
// 		fetchPost();
// 	}, []);

// 	const time = new Date().toLocaleTimeString();

// 	return (
// 		<div className="container">
// 			<form onSubmit={addComment} className={"form"}>
// 				<div>
// 					<label className="nameInputLabel" htmlFor="name">
// 						Name
// 					</label>
// 					<input
// 						className="nameInput"
// 						type="text"
// 						id="name"
// 						name="name"
// 						value={name}
// 						onChange={(e) => setName(e.target.value)}
// 					/>
// 				</div>
// 				<div>
// 					<label className="commentInputLabel" htmlFor="comment">
// 						Comment
// 					</label>
// 					<input
// 						className="commentInput"
// 						type="text"
// 						id="comment"
// 						name="comment"
// 						value={comment}
// 						multiline
// 						onChange={(e) => setComment(e.target.value)}
// 					/>
// 				</div>
// 				<Button onClick={() => fetchPost()} type="submit">
// 					Add Comment
// 				</Button>
// 			</form>
// 			<div className="time">
// 				{comments?.map((timestamp, id) => (
// 					<p key={id}>{timestamp}</p>
// 				))}
// 			</div>
// 			<div className="commentsContainer">
// 				<div className="names">
// 					{comments?.map((name, id) => (
// 						<p className="name" key={id}>
// 							{name.name}
// 						</p>
// 					))}
// 				</div>

// 				<div className="comments">
// 					{comments?.map((comment, id) => (
// 						<p className="comment" key={id}>
// 							{comment.comment}
// 						</p>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
