import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

import './MovieGrid.css';


const movieURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovie, setTopMovie] = useState([]);
  //faz a requizição para pegar o filme
  const getTopMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json()

    setTopMovie(data.results)
  }

  useEffect(() =>{
    const topRateUrl = `${movieURL}top_rated?${apiKey}`

    getTopMovie(topRateUrl)
  },[])


  return (
    <div>
      <h2 className="container">
        Melhores filmes:
      </h2>
        <div className="movies-container">
        {topMovie.length > 0 && topMovie.map(
          (movie) => <MovieCard key={movie.id} 
          movie={movie}/> )}
        </div>
    </div>
  )
}

export default Home;