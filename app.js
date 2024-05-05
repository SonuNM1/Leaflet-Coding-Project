
// Creating a new Leaflet map instance with HTML elemment id 'map' with initial coordinates and initial zoom level (13)

const map = L.map('map').setView([22.9074872, 79.07306671], 4);

// Using OpenStreetMap tiles 
// Placeholders -> {s} - tile server , {z} - zoom level , {x}{y} - tile coordinates

const tileUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png` ; 

// attribution string 

const attribution = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Coded by SonuNM with ❤️` ; 

// creating a new tile layer instances using the tile URL and attribution 

const tiles = L.tileLayer(tileUrl, {attribution}) ; 

// adding the tile layer to the map instance 

tiles.addTo(map) ; 



const circleLayer = L.circle([22.9074872, 79.07306671], {radius: 20000, color: 'coral'})

circleLayer.addTo(map) ; 