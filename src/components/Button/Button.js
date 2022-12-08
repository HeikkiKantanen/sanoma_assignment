import React from "react";
import classes from "./Button.module.css";

export default function Button({ type, onClick, children }) {
	return (
		<button
			className={classes.button}
			type={type || "button"}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
