import { useState, useMemo } from "react";
import CommentForm from "./CommentForm";

function Comment({ commentData, children }) {
  const commentChildren = useMemo(
    () => children.filter((comment) => comment.comment_id === commentData.id),
    [children, commentData]
  );
  const [reply, setReply] = useState(false);

  return (
    <div className="comment">
      <div className="commentInfo">
        <h5>{commentData.author.username}</h5>
        <h5>{commentData.timestamp}</h5>
      </div>
      <p>{commentData.content}</p>
      <div className="commentButtons">
        <button onClick={() => setReply(!reply)}>Reply</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      {reply && (
        <CommentForm parent={commentData.id} post={commentData.post_id} />
      )}
      {commentChildren && commentChildren.length > 0 && (
        <div className="commentReplies">
          {commentChildren.map((comment) => {
            return (
              <Comment
                commentData={comment}
                children={children}
                key={comment.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Comment;
