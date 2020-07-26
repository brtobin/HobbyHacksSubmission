 import React from 'react';

 export const HotspotTitle = props => {
    return(
        <div className="hotspot-info">
            {(props.currentHotspot != {}) && (
              <h1>{props.currentHotspot.placename}</h1>
            )}
            {(props.currentHotspot == {}) && (
                <h1>Um null</h1>
            )}
        </div>
    )
 }

 export default HotspotTitle;
  
 
 
 