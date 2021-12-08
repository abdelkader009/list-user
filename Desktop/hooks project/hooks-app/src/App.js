import React,{ useState} from 'react';
import  './App.css';
import MovieCard from './components/MovieCard';
import { v4 as uuidv4 } from 'uuid';
import {Routes,Route} from 'react-router-dom'
import Batman1 from './components/Batman1'


import data from './components/Data'

  


function App() {
  const[movies,setMovies] = useState(data.cardData)
  const [movie, setMovie] = useState({
    title: "",
    img: "",
    Desc: "",
    rate:""
  });
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
    
  }
  const handleSubmit = (e) =>{
    console.log(movie)
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    console.log(movies)
    setMovie('')
      };
      
  return(
    <div>
      
    <Routes>
      <Route path='/' element={<>
      <MovieCard  movies={movies} />
     <div className="addMovies">
      <input type="text" placeholder="Title" name="title"  onChange={ handleChange}></input>
      <input type="text" placeholder="Description" name="desc" onChange={ handleChange} ></input>
      <input type="text" placeholder="Image's URL" name="img" onChange={ handleChange}></input>
      <input type="text" placeholder="Rating" name="rate" onChange={handleChange}></input>
      <button type="submit" onClick={handleSubmit}>Submit </button>
     </div> 
      </>}></Route>
      <Route path='/:moviename' element={<Batman1 movies={movies}/>}></Route>
     
    </Routes>
      {/* <img src="logo.png" alt="" width="15%" /> */}
     {/* <MovieCard/> */}
     

    </div>
  )
}

export default App
