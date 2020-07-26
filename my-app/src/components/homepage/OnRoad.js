import React from 'react'
import { Link } from 'react-router-dom'

export const OnRoad = props => {
    return(
        <div>
            <Link to="./drive">
                <button type="button" class="btn btn-success" >On the Road</button>
            </Link>
            <img class="snapshot" src={props.item}/>
            <h4 class="text-white">
            </h4>
        </div>   
    )
}


