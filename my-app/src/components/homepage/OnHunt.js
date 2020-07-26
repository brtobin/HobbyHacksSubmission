import React from 'react'
import {Link} from 'react-router-dom'

export const OnHunt = props => {
    return(
        <div>
            <Link to={{
                pathname: './hunt/' + props.token,
            }}>
                <button type="button" class="btn btn-success" >On the Hunt</button>
            </Link>
            <img class="snapshot" src={props.item.album.images[0].url}/>
            <h4 class="text-white">      
            </h4>
        </div>   
    )
}

