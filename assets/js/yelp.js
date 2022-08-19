var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var userCity = []
 //Form that asks user for their city
var cityForm =  []
//Container or the resturants
var restList = document.getElementById("yelpRests")

var yelpCall = []
var lon = "";
var lat = "";