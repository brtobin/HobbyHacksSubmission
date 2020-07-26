import React from 'react'

export const Map = () => {
    return(
        <div className="map">
            <iframe
                id='mapObj'
                src="https://www.google.com/maps/embed/v1/place?key=<YOUR API KEY>&q=Current%20Location" allowfullscreen>
            </iframe>
        </div>
    )
}
