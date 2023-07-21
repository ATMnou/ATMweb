import { useLocation, useNavigate } from "react-router-dom";
import "./Detail.css";

function Detail() {
  const location = useLocation();
  const { year, title, summary, poster, genres } = location.state;
  const Navigate = useNavigate();
  function movieBeforePage() {
    // Navigate(-1);
    Navigate("/");
  }

  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie__summary">{summary.slice(0, 180)}...</p>
        <ul className="movie__genres">
          {genres.map((genre, index) => {
            return <li key={index}>{genre}</li>;
          })}
        </ul>
      </div>
      <button onClick={movieBeforePage}>Back</button>
    </div>
  );
}

export default Detail;
