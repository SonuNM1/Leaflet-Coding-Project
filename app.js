
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


// creating a circle layer with specified radius and color, and adding it to the map

const circleLayer = L.circle([22.9074872, 79.07306671], {radius: 20000, color: 'coral'})
circleLayer.addTo(map) ; 

// creating a rectangle layer with specified bounds and adding it to the map

const bounds = [[54.559322, -5.767822], [56.1210604, -3.021240]];
const rectangle = L.rectangle(bounds) ;
rectangle.addTo(map) ; 

// creating a polygon layer with specified coordinates 

const bermudaTriangle = [
    [[25.774, -80.19],
     [18.466, -66.118],
     [32.321 , -64.757]]
] ; 
const polygon = L.polygon(bermudaTriangle) ; 
polygon.addTo(map) ; 

// creating a polyline layer

const latlong = [
    [45.51, -122.68],
    [37.77, -122.43],
    [34.04, -118.2]
] ; 
const polyline = L.polyline(latlong, {} ) ; 
polygon.addTo(map) ; 

// circle marker radius -> pexels 
// circle radius -> meter

// creating a circle marker layer with specified coordinates, radius

const circleMarker = L.circleMarker([18.920675417289807, 72.82952788802635], {
    color: 'coral',
    radius: 100
}) ;
circleMarker.addTo(map) ;  

// custom icon 

const icon = L.icon({
    iconUrl: 'pizzaman.png',
    iconSize: [27, 22]
})

// adding marker with custom icon

const marker1 = L.marker([18.920675417289807, 72.82952788802635], {
    icon
}) ;

// popup to the map

marker1.bindPopup(`<h2>Pizza outlet 1<h2/>`) ; 

marker1.addTo(map) ;

/* 
const marker1 = L.marker([18.920675417289807, 72.82952788802635], {
    icon
}).addTo(map).bindPopup(`<h2>Pizza outlet 1<h2/>`) ;
*/

const marker2 = L.marker([28.539914829877652, 77.27116736919079], {
    icon
}) ;

// tooltip to the map

marker2.bindTooltip(`<h2>Pizza outlet 1<h2/>`) ; 

marker2.addTo(map) ;  