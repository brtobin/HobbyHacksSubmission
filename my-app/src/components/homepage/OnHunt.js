import React from 'react';
import { Link } from 'react-router-dom';

export const OnHunt = () => {
    return(
        <div>
            <h2 class="text-white">On the Hunt</h2>
            <img class="snapshot" src="{{current_playing.image}}"/>
            <h4 class="text-white">      
            </h4>
        </div>   
    )
}

