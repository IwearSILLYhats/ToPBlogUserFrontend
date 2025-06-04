import Comment from "./Comment";
import "./Comment.css";
import CommentForm from "./CommentForm";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { apiPost, apiPut, apiDelete } from "../util/postForm";

function CommentList() {
  const { postid } = useParams();
  const { loading, error, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/posts/${postid}/comments`
  );
  function extractForm(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    return formData;
  }
  async function createComment(event) {
    const formData = extractForm(event);
    const request = await apiPost(`/posts/${postid}/comments`, formData);
    console.log(request);
  }
  async function updateComment(event) {
    const formData = extractForm(event);
    const request = await apiPut(`/posts/${postid}/comments`, formData);
    console.log(request);
  }
  async function deleteComment(commentId) {
    const request = await apiDelete(`/posts/${postid}/comments`, {
      commentid: commentId,
    });
    console.log(request);
  }

  return (
    <div className="commentList">
      <h3>Comment List</h3>
      <div>
        <h5>New Comment</h5>
        <CommentForm action={createComment} />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data &&
        data.success?.length > 0 &&
        data.success
          .filter((comment) => comment.comment_id === null)
          .map((comment) => {
            return (
              <Comment
                commentData={comment}
                children={data.success}
                key={comment.id}
                newComment={createComment}
                editComment={updateComment}
                removeComment={deleteComment}
              />
            );
          })}
    </div>
  );
}

export default CommentList;
