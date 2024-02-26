import React, { useEffect, useState } from 'react'
import './Row.css'
import instance from '../instance';
function Row({title,fetchUrl,isposter}) {
    /*console.log(title,fetchUrl);*/
    const[movie,setmovie] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";

    const fetchData =async ()=>{
      const response = await instance.get(fetchUrl)
      /*console.log(response.data.results);*/
      setmovie(response.data.results)

    }
    console.log(movie);
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div className='row'>
        <h3>{title}</h3>
        <div className='movie-row'>
            { movie.map(item=>(<img className={`movie ${isposter?'movie-poster':'movie'}`} src={`${base_url}${isposter?item.poster_path:item.backdrop_path}`} alt="poster" />))
              }
        </div>
    </div>
  )
}

export default Row
