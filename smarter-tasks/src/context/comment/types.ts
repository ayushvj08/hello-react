type User = {
    id: number,
    name: string,
    email: string
  }
  export type Comment = {
    id: number;
    description: string;
    task_id: number;
    owner: number;
    createdAt: string
    User: User
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
    | { type: AvailableActions.CREATE_COMMENTS_SUCCESS, payload: Comment }
    | { type: AvailableActions.CREATE_COMMENTS_FAILURE; payload: string };
  
  export type CommentState = {
    comments: Comment[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
  };