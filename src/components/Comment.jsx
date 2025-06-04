import { useState, useMemo } from "react";
import CommentForm from "./CommentForm";

function Comment({
  commentData,
  children,
  newComment,
  editComment,
  removeComment,
}) {
  const commentChildren = useMemo(
    () => children.filter((comment) => comment.comment_id === commentData.id),
    [children, commentData]
  );
  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteComment, setDeleteComment] = useState(false);

  function setField(e) {
    if (e.target.classList.contains("replyBtn")) {
      setReply(!reply);
      setEdit(false);
      setDeleteComment(false);
    } else if (e.target.classList.contains("editBtn")) {
      setReply(false);
      setEdit(!edit);
      setDeleteComment(false);
    } else if (e.target.classList.contains("deleteBtn")) {
      setReply(false);
      setEdit(false);
      setDeleteComment(!deleteComment);
    }
  }

  return (
    <div className="comment">
      <div className="commentInfo">
        <h5>
          {commentData.author.username} | {commentData.timestamp}
        </h5>
      </div>
      <p>{commentData.content}</p>
      <div className="commentButtons">
        <button onClick={(e) => setField(e)} className="replyBtn">
          Reply
        </button>
        <button onClick={(e) => setField(e)} className="editBtn">
          Edit
        </button>
        <button onClick={(e) => setField(e)} className="deleteBtn">
          Delete
        </button>
      </div>
      {reply && <CommentForm parent={commentData.id} action={newComment} />}
      {edit && (
        <CommentForm
          parent={commentData.id}
          action={editComment}
          content={commentData.content}
        />
      )}
      {deleteComment && (
        <button onClick={() => removeComment(commentData.id)}>
          Confirm delete?
        </button>
      )}
      {commentChildren && commentChildren.length > 0 && (
        <div className="commentReplies">
          {commentChildren.map((comment) => {
            return (
              <Comment
                commentData={comment}
                children={children}
                key={comment.id}
                newComment={newComment}
                editComment={editComment}
                removeComment={removeComment}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comment;
