function fetchEventsForCity(city){
$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?city=" + city + "&apikey=U9U79W6aroxgXPoxrbUloPyqkHPTVAyD",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });
}


