import { API_ENDPOINT } from "../../config/constants";
import { Comment } from "./reducer";
export const fetchComments = async (  projectID: string, taskID: string) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {
      const response = await fetch(`${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      })
      if (!response.ok){
        throw new Error("Failed to fetch task comments");
  
      }
      const data = response.json()
      console.log(data)
    } catch (error) {
      console.error("Operation failed:", error);
  
    }
  }

export const addComment = async (projectID: string, taskID: string, comment: Comment) => {
    const token = localStorage.getItem("authToken") ?? "";

    try {
        const response = await fetch(`${API_ENDPOINT}/projects/${projectID}/tasks/${taskID}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(comment)
        })
        if (!response.ok){
          throw new Error("Failed to fetch task comments");
    
        }
        const data = response.json()
        console.log(data)
      } catch (error) {
        console.error("Operation failed:", error);
    
      }
}