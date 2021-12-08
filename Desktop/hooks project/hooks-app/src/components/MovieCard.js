import React,{useState} from 'react'
import {Card} from 'react-bootstrap'
import Rating from './Rating'
import data from './Data'
import { Link } from 'react-router-dom'



const MovieCard = () => {
    const[filter,setFilter]=useState('')
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    })
    return (
      
        <div className="card1">
            <div className="col">
                <div className="mb">
                    
                    <input className="form-control" type="text" placeholder="Search" value={filter} onChange={searchText.bind(this)}/>
                   

                </div>
               
            </div>
           <div className="card3">
            {dataSearch.map((item, index)=>{
              
               return(
                <div className="card2"> 
                
                <Card style={{ width: '18rem' }}>
                  <Link to={`/${item.title}`} state={item.id}>
                <Card.Img className="img" variant="top" src={item.img} />
                </Link>
                <Card.Body>
                  <Card.Title className="title"><h1>{item.title}</h1></Card.Title>
                  <Card.Text className="text">{item.desc}</Card.Text>
                  <Card.Text className="link">{item.link}</Card.Text>
                  <Card.Text  className="rate">{item.rate}</Card.Text>
                  <div className="rate1">
                  <Rating />
                </div>
                  
               </Card.Body>
                
              </Card> 
              </div>

               ) 
            })}</div>
 

        </div>
    )
}



export default MovieCard
