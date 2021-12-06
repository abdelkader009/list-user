import ReactStars from "react-rating-stars-component";
import React from "react";

 const Rating = ( ) => {
   

    return (
        <div>
            <ReactStars
                count={1}
                edit={false}
                size={24}
                value={1}
                activeColor="#ffd700"
            />
        </div>
    )
}



export default Rating