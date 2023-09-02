import React, { useContext, useState } from "react";
import { CommentContext } from "../../context/comment/context";
import { useParams } from "react-router-dom";
// import { SubmitHandler, useForm } from "react-hook-form";
import { addComment } from "../../context/comment/actions";

// type Inputs = {
//   description: string;
// };

const formatDateForPicker = (isoDate: string) => {
  const dateObj = new Date(isoDate);
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");

  // Format the date as per the required format for the date picker (YYYY-MM-DD)
  return `${year}-${month}-${day}`;
};

const Comments = () => {
  const { commentState, commentDispatch } = useContext(CommentContext);
  const { taskID, projectID } = useParams();
  const [description, setDescription] = useState("");
  //   const navigate = useNavigate();
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm<Inputs>();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      addComment(commentDispatch, taskID ?? "", projectID ?? "", description);
      setDescription("");
    } catch (error) {
      console.log("Operation Failed!");
    }
  };

  return (
    <div>
      <p className="font-bold mt-2">Comments</p>
      <form className="flex " onSubmit={onSubmit}>
        <input
          //   onFocus={() => navigate("comments")}
          type="text"
          id="commentBox"
          placeholder="Add Comment..."
          className="w-full border rounded-md mr-4 py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          name="description"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          //   {...register("description", { required: true })}
        />
        <input
          type="submit"
          id="addCommentBtn"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 my-2 mr-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          value={"Add Comment"}
        />
      </form>
      {/* {errors.description && (
        <span className="text-red-500">This field is required!</span>
      )} */}
      <div>
        {commentState.isLoading ? (
          <>Loading...</>
        ) : (
          commentState.comments.map((comment) => {
            return (
              <p className="comment" key={comment.id}>
                {comment.description} - {comment.User.name} -{" "}
                {formatDateForPicker(comment.createdAt)}
              </p>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Comments;
