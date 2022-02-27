import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Movie from './components/Movie';

function App() {

  const [searchTerm , setSearchTerm] = useState('')
  const [movies , setMovies] = useState([])

  const getSearchTerm = useCallback((value) => {
    setSearchTerm(value)
  },[searchTerm])

  useEffect(() => {
    const fetchData  = async() => {
      if(searchTerm !== ''){
        const res = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
        const data = await res.json();
        setMovies(data.filter(m => m.show.image !== null));
      }else{
        setMovies([])
      } 
    }

    const delayDebounceFn = setTimeout(() => {
      fetchData ();
    }, 1000)

    return () => clearTimeout(delayDebounceFn)

  },[searchTerm])


  return (
    <div className="App">
      <Header getSearchTerm={getSearchTerm} />
      <div className='movies'>
        {movies.map((movie ,index) => (
          <Movie key={index} score={movie.score} show={movie.show} />
        ))}
      </div>
    </div>
  );
}

export default App;
