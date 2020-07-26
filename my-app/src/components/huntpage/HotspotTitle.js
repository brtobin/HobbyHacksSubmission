 import React from 'react';

 export const HotspotTitle = props => {
    return(
        <div className="hotspot-info-block">
            {(props.currentHotspot !=null) && props.currentHotspot.lib != null && props.currentHotspot.lib[1] != null && (
                <div className="hotspot-info">
                    <h1>{props.currentHotspot.placename}</h1>
                    <p class="song">{props.currentHotspot.lib[0].song} by {props.currentHotspot.lib[0].artist}</p>
                    <p class="song">{props.currentHotspot.lib[1].song} by {props.currentHotspot.lib[1].artist}</p>
                </div>
            )}
            {(props.currentHotspot !=null) && props.currentHotspot.lib != null && props.currentHotspot.lib[1] == null && (
                <div className="hotspot-info">
                    <h1>{props.currentHotspot.placename}</h1>
                    <p class="song">{props.currentHotspot.lib[0].song} by {props.currentHotspot.lib[0].artist}</p>
                </div>
            )}
            {(props.currentHotspot == null) && (
                <h1>Um null</h1>
            )}
        </div>
    )
 }

 export default HotspotTitle;
  
 
 
 