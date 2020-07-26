import React from 'react'
import { createUser } from '../services/UserService'

export const FindHotspots = props => {
    return(
        <div className="text-center">
           <button type="button" onClick={props.loadHotspot} className="btn btn-danger">Find Hotspots Near Me!</button>
        </div>
    )
}