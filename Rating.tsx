import React from "react";
import {Rating,Typography} from '@mui/material';
import './Rating.css';
const rating=()=>{
    
    return(
       
            <>
            <h1>Please Rate Our Website</h1>
            <Typography component="legend">Controlled</Typography>
            <Rating  id="rating"
                name="simple-controlled"
            />
         </>
        
            
           
            
    )
}
export default rating;