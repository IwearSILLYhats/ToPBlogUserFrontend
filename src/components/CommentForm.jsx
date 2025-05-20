function CommentForm() {
  return (
    <form action="">
      <textarea
        name="comment"
        id=""
        defaultValue={
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni aliquam sed delectus enim cupiditate esse aliquid veritatis suscipit perferendis, assumenda sit, repellat autem, inventore dignissimos accusantium magnam! Repellat, aliquam?"
        }
      ></textarea>
      <button>Submit Comment</button>
    </form>
  );
}

export default CommentForm;
