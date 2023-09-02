import React from "react";
import { API_ENDPOINT } from "../../config/constants";
import { AvailableActions, CommentActions } from "./types";

export const fetchComments = async (
  commentDispatch: React.Dispatch<CommentActions>,
  projectID: string,
  taskID: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    commentDispatch({ type: AvailableActions.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch task comments");
    }
    const data = await response.json();
    commentDispatch({
      type: AvailableActions.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    commentDispatch({
      type: AvailableActions.FETCH_COMMENTS_FAILURE,
      payload: "Unable to load Comments!",
    });
  }
};

export const addComment = async (
  commentDispatch: React.Dispatch<CommentActions>,
  projectID: string,
  taskID: string,
  args: {description: string, owner: number}
) => {
  try {
    commentDispatch({ type: AvailableActions.CREATE_COMMENTS_REQUEST });
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(args),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch task comments");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }

    commentDispatch({
      type: AvailableActions.CREATE_COMMENTS_SUCCESS,
      payload: data,
    });
    fetchComments(commentDispatch, projectID, taskID)
    console.log(data);
    return { ok: true };
  } catch (error) {
    console.error("Operation failed:", error);
    commentDispatch({
      type: AvailableActions.CREATE_COMMENTS_FAILURE,
      payload: "Error Creating Comment!",
    });
    return { ok: false, error };

  }
};
