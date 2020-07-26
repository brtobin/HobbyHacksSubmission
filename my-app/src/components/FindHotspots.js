import React, { Component } from 'react'
import { createUser } from '../services/UserService'

export var FindHotspots = props => {
    
    return(
        <div className="text-center">
           <button type="button" onClick={props.loadHotspot} className="btn btn-danger">Find Hotspots Near Me!</button>
        </div>
    )
}