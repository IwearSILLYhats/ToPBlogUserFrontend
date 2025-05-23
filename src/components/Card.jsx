import { Link } from "react-router-dom";
import "./Card.css";

function Card({ articleInfo }) {
  return (
    <Link to={"/posts/" + articleInfo.id}>
      <div className="card">
        <p>{articleInfo.title}</p>
        <p>{articleInfo.author.username}</p>
      </div>
    </Link>
  );
}
export default Card;
