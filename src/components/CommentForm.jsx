function CommentForm({ parent, action, content }) {
  return (
    <form action="" onSubmit={(e) => action(e)}>
      <input type="hidden" name="commentid" value={parent} />
      <textarea
        name="content"
        id=""
        placeholder="Type your comment here"
        defaultValue={content || ""}
      ></textarea>
      <button>Submit</button>
    </form>
  );
}

export default CommentForm;
