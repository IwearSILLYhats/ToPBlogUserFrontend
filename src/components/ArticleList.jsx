import useFetch from "../hooks/useFetch";
import Card from "./Card";

function ArticleList() {
  const { loading, error, data } = useFetch("http://localhost:3000/posts");
  return (
    <main>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data.posts.length > 0 &&
        data.posts.map((article) => {
          return <Card key={article.id} articleInfo={article} />;
        })}
    </main>
  );
}

export default ArticleList;
