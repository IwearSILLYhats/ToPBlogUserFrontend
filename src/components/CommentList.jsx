import Comment from "./Comment";
import "./Comment.css";
import CommentForm from "./CommentForm";

function CommentList() {
  return (
    <div className="commentList">
      <h3>Comment List</h3>
      <div>
        <h5>New Comment</h5>
        <CommentForm />
      </div>
      <Comment nested={true} />
    </div>
  );
}

export default CommentList;
