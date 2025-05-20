import { useState } from "react";
import CommentForm from "./CommentForm";

function Comment({ nested }) {
  const [reply, setReply] = useState(false);
  return (
    <div className="comment">
      <div className="postInfo">
        <h5>Username</h5>
        <h5>Date Posted</h5>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
        animi accusantium odit fuga quaerat! Laboriosam mollitia quod similique
        sint voluptates, enim ipsam iure repudiandae distinctio sit
        reprehenderit quam hic natus.
      </p>
      <div className="commentButtons">
        <button onClick={() => setReply(!reply)}>Reply</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
      {reply && <CommentForm />}
      {nested && (
        <div className="commentReplies">
          <Comment nested={false} />
          <Comment nested={false} />
        </div>
      )}
    </div>
  );
}

export default Comment;
