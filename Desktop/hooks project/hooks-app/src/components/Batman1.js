import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
const Batman1 = ({movies}) => {
    const location = useLocation()
    const movie = movies.find(el=> location.state == el.id)
    const navigate = useNavigate()
    return (
        <div className="bat1">
            
             {movie.link}
       
        <br />
        {movie.title}
        <br />
        {movie.desc}
        <br />
        <div className="button">
        <button onClick={()=>navigate(-1)}>Go back</button></div>
        </div>
    )
}

export default Batman1
