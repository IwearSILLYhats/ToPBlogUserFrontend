import { apiPost } from "../util/postForm";

function CommentForm({ post, parent }) {
  async function newComment(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const comment = await apiPost(`/posts/${post}/comments`, formData);
    if (comment.error) {
      console.error(comment.error);
    }
    console.log(comment.success);
  }
  return (
    <form action="" onSubmit={(e) => newComment(e)}>
      <input type="hidden" name="parent" value={parent} />
      <textarea
        name="content"
        id=""
        placeholder="Type your comment here"
      ></textarea>
      <button>Submit Comment</button>
    </form>
  );
}

export default CommentForm;
