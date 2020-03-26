import React from "react";
import Card from "../Card/Card";
import fallBackImg from "../Assets/img/fallbackImg.png";

function FavoriteList({ movies, onDeleteFavorite }) {
  const [limit, setLimit] = React.useState(5);

  const handleIncreaseMovies = () => {
    setLimit(previous => previous + 5);
  };

  return (
    <section>
      <h1>Favorites</h1>
      <div>
        {movies.slice(0, limit).map((movie, idx) => (
          <Card
            key={idx}
            title={movie.title}
            img={movie.posterUrl}
            description={movie.plot}
            ctaText="Delete Favorite"
            onButtonClick={() => onDeleteFavorite(movie)}
            fallBackImg={fallBackImg}
          />
        ))}
      </div>
    </section>
  );
}

export default FavoriteList;
