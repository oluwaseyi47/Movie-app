import React, { useState, useEffect } from "react";
import MovieList from "./Components/MovieList";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MovieListHeading from './Components/MovieListHeading'
import SearchBox from "./Components/SearchBox";
import AddFavotites from "./Components/AddFavotites";
import RemoveFavorite from "./Components/RemoveFavorite";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites]= useState([])
  const [searchValue, setSearchValue]= useState('')
   
  const getMovieRequest = async () => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=139d6bd0`

    const response = await fetch (url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue]);

  // useEffect (() => {
  //   const movieFavorites = JSON.parse(
  //     localStorage.getItem('react-movie-app-favorites')
  //     )
  //     setFavorites(movieFavorites);
  // }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem
    ('react-movie-app-favorites', JSON.stringify)
  }

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie]
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList)
  };

  const removeFavoriteMovie = (movie) =>{
    const newFavoriteList = favorites.filter(
      (favorite)=>favorite.imdbID !== movie.imdbID
      );
  
      setFavorites(newFavoriteList);
    };
  
  return (
    <div className='container-fluid movie-app'>
      <div className='row  nav align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' /> 
        <SearchBox  className='search-box' searchValue={searchValue} setSearchValue={setSearchValue}/>  
      </div>
      <div className="row"> 
            <MovieList movies={movies} 
            handleFavoritesClick={addFavoriteMovie} 
            favoriteComponent = {AddFavotites}/>  
      </div>
     
      <div className='row  nav align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Favorites' /> 
      </div>
      <div className="row"> 
            <MovieList movies={favorites} 
            handleFavoritesClick={removeFavoriteMovie} 
            favoriteComponent = {RemoveFavorite}/>  
      </div>
    </div>
  );
};

export default App;
