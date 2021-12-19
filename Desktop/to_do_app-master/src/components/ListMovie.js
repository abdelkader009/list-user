import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditMovie from './EditMovie';
import { useDispatch } from 'react-redux';
import { deleteMovie } from '../action/ActionMovie';
import AddMovie from './AddMovie';
import './style.css'
import { useState } from 'react';


const ListMovie = () => {
    const [doneType, setDoneType] = useState(false)
    const movie = useSelector(state => state.movies.MovieList)
    const dispatch = useDispatch()
    return (
        <div className='div_list'>
            {movie.filter(el => (
                doneType === true ? el.isDone : !doneType ? !el.isDone : el
            )).map(el =>
                <ListGroup key={el.id} as="ol" numbered >
                    <ListGroup.Item >
                        <div>
                            {el.title}
                            <i className="far fa-check-circle icones" name="isDone" style={{ color: el.isDone ? "green" : "red" }} ></i>
                            <EditMovie movies={el} />
                            <i className="far fa-times-circle icones" onClick={() => dispatch(deleteMovie(el.id))}></i>

                        </div>
                    </ListGroup.Item>
                </ListGroup>
            )
            }
            <div className='div_btn'>
                <Button variant="outline-success btn" onClick={() => setDoneType('all')} >All Movies</Button>
                <Button variant="outline-success btn" onClick={() => setDoneType(true)} >Movies Done</Button>
                <Button variant="outline-danger btn" onClick={() => setDoneType(false)} >Movies Undone</Button>
                <AddMovie />
            </div>

        </div>
    )
}

export default ListMovie



