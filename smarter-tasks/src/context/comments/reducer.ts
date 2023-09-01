export type Comment = {
  id: number;
  description: string;
  task_id: number;
  owner: number;
};
export enum AvailableActions {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  CREATE_COMMENTS_REQUEST = "CREATE_COMMENTS_REQUEST",
  CREATE_COMMENTS_SUCCESS = "CREATE_COMMENTS_SUCCESS",
  CREATE_COMMENTS_FAILURE = "CREATE_COMMENTS_FAILURE",
}

export type CommentActions =
  | { type: AvailableActions.FETCH_COMMENTS_REQUEST }
  | { type: AvailableActions.FETCH_COMMENTS_SUCCESS; payload: Comment[] }
  | { type: AvailableActions.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: AvailableActions.CREATE_COMMENTS_REQUEST }
  | { type: AvailableActions.CREATE_COMMENTS_SUCCESS }
  | { type: AvailableActions.CREATE_COMMENTS_FAILURE; payload: string };

export type CommentState = {
  comments: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
};

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
      return { ...state, isLoading: false };

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
