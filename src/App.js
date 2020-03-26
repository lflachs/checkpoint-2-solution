import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Featured from "./Movies/Featured";

function App() {
  const [allMovies, setAllMovies] = React.useState([]);
  const [selectedMovies, setSelectedMovies] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [allGenres, setAllGenres] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [featuredMovie, setFeaturedMovie] = React.useState({});
  // Fetch the movies

  //   beers/12
  React.useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
    )
      .then(response => response.json())
      .then(results => {
        setAllMovies(results.movies);
        setSelectedMovies(results.movies);
        handleChangeFeaturedMovie(results.movies);
        setLoading(false);
      });
    window.localStorage.setItem("favoriteMovie", []);
  }, []);

  const handleAddFavorite = clickedMovie => {
    setFavorites([...favorites, clickedMovie]);
    setSelectedMovies(selectedMovies.filter(movie => movie !== clickedMovie));
    window.localStorage.setItem("favoriteMovie", [
      ...window.localStorage.getItem("favoriteMovie"),
      clickedMovie
    ]);
  };

  const handleDeleteFavorite = clickedMovie => {
    setFavorites(favorites.filter(movie => movie !== clickedMovie));
    setSelectedMovies([clickedMovie, ...selectedMovies]);
    window.localStorage.setItem("favoriteMovie", [
      ...window.localStorage
        .getItem("favoriteMovie")
        .filter(movie => movie !== clickedMovie)
    ]);
  };

  const handleChangeFeaturedMovie = moviesArray => {
    console.log("handleFeaturedMovie");
    if (!moviesArray) {
      moviesArray = favorites.length === 0 ? allMovies : favorites;
    }
    console.log("moviesArray", moviesArray);
    const randomNumber = Math.floor(Math.random() * moviesArray.length);
    console.log(moviesArray[randomNumber]);
    setFeaturedMovie(moviesArray[randomNumber]);
  };

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Homepage
              featuredMovie={featuredMovie}
              favorites={favorites}
              selectedMovies={selectedMovies}
              loading={loading}
              handleDeleteFavorite={handleDeleteFavorite}
              handleAddFavorite={handleAddFavorite}
              handleChangeFeaturedMovie={handleChangeFeaturedMovie}
            />
          )}
        />
        <Route
          exact
          path="/favorites"
          render={props => (
            <Featured
              img={featuredMovie.posterUrl}
              title={featuredMovie.title}
              description={featuredMovie.description}
              onChangeFeatured={handleChangeFeaturedMovie}
            />
          )}
        />
      </Switch>
    </Router>
    // return (
    //   <Router>
    //     <Switch>
    //       <Route exact path="/" render={() => <h1>Test</h1>} />
    //     </Switch>
    //   </Router>
    //   // <div className="App">
    //   //   <Homepage />
    //   // </div>
    // );
  );
}

export default App;
