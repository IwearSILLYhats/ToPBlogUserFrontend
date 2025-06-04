import Comment from "./Comment";
import "./Comment.css";
import CommentForm from "./CommentForm";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function CommentList() {
  const { postid } = useParams();
  const { loading, error, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/posts/${postid}/comments`
  );
  return (
    <div className="commentList">
      <h3>Comment List</h3>
      <div>
        <h5>New Comment</h5>
        <CommentForm post={postid} />
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
              />
            );
          })}
    </div>
  );
}

export default CommentList;
