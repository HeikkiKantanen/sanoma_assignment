import React, { useReducer } from "react";

const initialState = {
	comments: [{}],
};

export const CommentsContext = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_COMMENT":
			return {
				comments: [
					...state.comments,
					{
						time: new Date().valueOf(),
						...action.item,
					},
				],
			};
		case "UPDATE_COMMENT":
			const updateComment = state.comments.map(
				(item) => item.time === action.time
			);
			return {};
	}
};
