import React from "react";
import MoviesList from "../Movies/Movieslist";
import FavoriteList from "../Movies/FavoritesList";
import Featured from "../Movies/Featured";

function Homepage({
  featuredMovie,
  favorites,
  selectedMovies,
  loading,
  handleDeleteFavorite,
  handleAddFavorite,
  handleChangeFeaturedMovie
}) {
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <Featured
            title={featuredMovie.title}
            img={featuredMovie.posterUrl}
            description={featuredMovie.plot}
            onChangeFeatured={handleChangeFeaturedMovie}
          />
          <FavoriteList
            movies={favorites}
            onDeleteFavorite={handleDeleteFavorite}
          />
          <MoviesList
            movies={selectedMovies}
            onAddFavorite={handleAddFavorite}
          />
        </div>
      )}
    </div>
  );
}

export default Homepage;
