import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditMovie from './EditMovie';
import { Link } from 'react-router-dom';
import AddMovie from './AddMovie';
import { deleteMovie } from '../action/ActionMovie';

import './style.css'

const FiltreMovie = ({doneType}) => {
    const movies = useSelector(state => state.movies.MovieList)
    const moviesDone = movies.filter(el => (el.isDone === doneType ))
    const dispatch = useDispatch()
    return (
        <div className='div_list'>
           
            {moviesDone.map(tsk =>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item >
                    <div> 
                            {tsk.title}
                            <i className="far fa-check-circle icones" name="isDone"  style={{ color: movies.isDone ? "green" : "red" }} ></i>
                            <EditMovie movies={tsk} />
                            <i className="far fa-times-circle icones" onClick={()=>{dispatch(deleteMovie(tsk.id))}}></i>
                        </div>

                    </ListGroup.Item>
                </ListGroup>
            )
            }
         <AddMovie/>
           
        </div>
    )
}

export default FiltreMovie





        

