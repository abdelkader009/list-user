import React from 'react'
import Iframe from 'react-iframe'
const inception = () => {
    return (
        <div>
           <Iframe url="https://www.youtube.com/embed/YoHD9XEInc0"
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        <p>A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.</p> 
        </div>
    )
}

export default inception
