import React from "react";
import Card from "../Card/Card";
import fallBackImg from "../Assets/img/fallbackImg.png";
import { Card2 } from "../Card/Card2";

function MoviesList({ movies, onAddFavorite }) {
  const [limit, setLimit] = React.useState(5);

  const handleIncreaseMovies = () => {
    setLimit(previous => previous + 5);
  };

  return (
    <section>
      <h1>Movies</h1>
      {/* <Card2>
        <Card2.Body>
          <Card2.Title>Hello</Card2.Title>
          <Card2.Image src={fallBackImg} alt="test" />
          <Card2.Description>Description</Card2.Description>
          <Card2.Button>Click Here</Card2.Button>
        </Card2.Body>
      </Card2> */}
      <div>
        {movies.slice(0, limit).map((movie, idx) => (
          <Card
            key={idx}
            title={movie.title}
            img={movie.posterUrl}
            description={movie.plot}
            ctaText="Add to Favorite"
            onButtonClick={() => onAddFavorite(movie)}
            fallBackImg={fallBackImg}
          />
        ))}
      </div>
      <h1 onClick={handleIncreaseMovies}>Show more...</h1>
    </section>
  );
}

export default MoviesList;
