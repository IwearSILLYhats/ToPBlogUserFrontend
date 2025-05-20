import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Viewer from "./Viewer";
import CommentList from "./CommentList";
import "./Article.css";

function Article() {
  const { postid } = useParams();
  const { loading, error, data } = useFetch(
    `${import.meta.env.VITE_API_URL}/posts/${postid}`
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <main>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {data && <h1>{data.title}</h1>}
        {data && <Viewer article={JSON.parse(data.content)} />}
      </main>
      <CommentList />
    </>
  );
}

export default Article;
