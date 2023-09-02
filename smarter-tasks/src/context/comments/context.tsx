import React, { createContext, useReducer } from "react";
import { CommentActions, CommentState, commentReducer } from "./reducer";

type CommentContextType = {
  commentState: CommentState;
  commentDispatch: React.Dispatch<CommentActions>;
};
const initialState = {
  comments: [
    {
      id: 1,
      description:
        "I've completed the design task. The development team can start working on it.",
      task_id: 1,
      owner: 1,
      createdAt: new Date().toISOString(),
      User: {
        id: 1,
        name: "test",
        email: "test@test.com",
      },
    },
  ],
  isLoading: false,
  isError: false,
  errorMessage: "",
};
export const CommentContext = createContext<CommentContextType>({
  commentState: initialState,
  commentDispatch: () => {},
});

export const CommentContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [commentState, commentDispatch] = useReducer(
    commentReducer,
    initialState
  );

  return (
    <CommentContext.Provider value={{ commentState, commentDispatch }}>
      {children}
    </CommentContext.Provider>
  );
};
