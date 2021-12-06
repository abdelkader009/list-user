import React,{ useState} from 'react';
import  './App.css';
import MovieCard from './components/MovieCard';
import { v4 as uuidv4 } from 'uuid';


  


function App() {
  const[movies,setMovies] = useState([])
  const [movie, setMovie] = useState({
    Title: "",
    ImageMovies: "",
    Descreption: "",
    PosterURL: "",
    Rating:""
  });
  const handleChange = (e) =>{
    setMovie({...movie, [e.target.name]: e.target.value})
    
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    setMovies([...movies, {id:uuidv4(),...movie}])
    setMovie('')
      };
  return(
    <div>
      
      <img src="logo.png" alt="" width="15%" />
     <MovieCard/>
     
     <div className="addMovies">
      <input type="text" placeholder="Title" name="Title"  onChange={ handleChange}></input>
      <input type="text" placeholder="Description" name="Description" onChange={ handleChange} ></input>
      <input type="text" placeholder="URL" name="PosterURL" onChange={ handleChange}></input>
      <input type="text" placeholder="Image's URL" name="ImageMovies" onChange={ handleChange}></input>
      <input type="text" placeholder="Rating" name="rating" onChange={handleChange}></input>
      <button type="submit">Submit {handleSubmit}</button>
    
     </div> 

    </div>
  )
}

export default App
