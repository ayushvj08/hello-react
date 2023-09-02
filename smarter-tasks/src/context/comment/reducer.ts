import { CommentActions, CommentState } from "./types";

export const commentReducer = (state: CommentState, action: CommentActions) => {
  switch (action.type) {
    case "FETCH_COMMENTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_COMMENTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case "FETCH_COMMENTS_FAILURE":
      return {
        ...state,
        isLoading: false ,
        isError: true,
        errorMessage: action.payload,
      };

    case "CREATE_COMMENTS_REQUEST":
      return { ...state, isLoading: true };

    case "CREATE_COMMENTS_SUCCESS":
      return { ...state, isLoading: false, comments: [...state.comments, action.payload] };

    case "CREATE_COMMENTS_FAILURE":
      return {
        ...state,
        isLoading: false ,
        isError: true,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
