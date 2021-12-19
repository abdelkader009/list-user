import React from 'react';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateMovie } from '../action/ActionMovie';
import './style.css'


const EditMovie = ({ movies }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [input, setInput] = useState({ id: movies.id, dec: movies.dec, title: movies.title })
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const [isDone, setisDone] = useState(movies.isDone)

    return (
        <>
            <i className="fas fa-edit" onClick={handleShow}> </i>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>
                        <input type='text' name='title' value={input.title} onChange={handleChange} placeholder={movies.title} ></input>
                        <i className="far fa-check-circle icone_done" name="isDone" onClick={() => setisDone(!isDone)} style={{ color: isDone ? "green" : "red" }} ></i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type='text' placeholder={movies.dec} name='dec' value={input.dec} onChange={handleChange} />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary" onClick={() => {
                        dispatch(updateMovie({ ...input, isDone }));
                        handleClose()
                        return
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditMovie










