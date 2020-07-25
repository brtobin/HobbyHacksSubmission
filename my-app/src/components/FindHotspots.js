import React from 'react'

var madisonHotspot = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBaNwCOB31e5gJqrksaSDU5_duK6POZhvw&q=place_id:ChIJZwW4XcmsB4gRYJF5spqwliQ";
var otherMadisonHotspot = "https://www.google.com/maps/embed/v1/place?key=AIzaSyBaNwCOB31e5gJqrksaSDU5_duK6POZhvw&q=place_id:ChIJ5YH4falWBogR5Lpub1B0OVA";
var hotspots = [madisonHotspot, otherMadisonHotspot]

function getHotspotIndex() {
    var index = Math.floor(Math.random() * hotspots.length);
    return index;
}

function loadHotspot() {
    document.getElementById('mapObj').src = hotspots[getHotspotIndex()];
}

export const FindHotspots = () => {
    return(
        <div className="text-center">
           <button type="button" onClick={loadHotspot} className="btn btn-danger">Find Hotspots Near Me!</button>
        </div>
    )
}