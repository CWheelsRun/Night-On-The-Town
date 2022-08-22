var userFormEl = document.querySelector("#user-form")
 //Form that asks user for their city
var searchInputEl = document.querySelector("#userCity")
//Container or the resturants
var restList = document.getElementById("yelpRests")

var historyEl = document.getElementById("history")

var button = document.querySelector(".submit-btn")

var yelpCall = []
var lon = "";
var lat = "";

var apiKey = "2Jru7BYhCgrp7RHLAYqJRZjQzkzWkSs0W0605u8TICakr9Pndi8nnPqgJFjLr-UFl2kvxfvR7aTzr78HwZUav_4tjBKNiRVqMXUllxda-Jsu3OFalXAjlw3-Sa31YnYx"

var restaurantListURL =
"https://api.yelp.com/v3/businesses/search?location=" +
searchInputEl +
"&radius=2000&limit=10&sort_by=rating";

var proxyURL = "https://cors-anywhere.herokuapp.com/";

  
let myHeaders = new Headers();
myHeaders.append("method", "GET");
myHeaders.append(
  "Authorization",
  "Bearer " + apiKey
);
myHeaders.append("Content-Type", "application/json");
myHeaders.append("mode", "no-cors");
myHeaders.append("Access-Control-Allow-Origin", "*");
  

button.addEventListener('click', function (restYelp){
  fetch(proxyURL + restaurantListURL, {
    method: "GET",
    headers: {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*",
        "Authorization": `Bearer ${apiKey}`
     }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .then(data => {
    var resturants = data['businesses'];
    var images = data['image_url'];

    restList.innerHTML = resturants;
    restList.innerHTML = images
  })  

  .catch(err => alert ("Could not locate city!"))

});