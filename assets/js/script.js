$("#find-events-btn").on("click", function (event) {
    var location = $("#location")[0].value;
    
    var sMusic = $("$music").prop("checked");
    var cSports = $("#sports").prop("checked");
    var cArtsTheater = $("arts-theater").prop("checked");
    var cMisc = $("#misc");
    
    var genre_string = "";
    if (sMusic || cSports || cArtsTheater || cMisc) {
        genre_string = "&segmentID=";
    }
        if (smusic) {
            genre_string += "KZFzniwnSyZfZ7v7nJ,";
        }
        if (cSports) {
            genre_string += "KZFzniwnSyZfZ7v7nE,";
        }
        if (cArtsTheater) {
            genre_string += "KZFzniwnSyZfZ7v7na,";
        }
        if (cMisc) {
            genre_string += "KZFzniwnSyZfZ7v7n1";
        }
        console.log(genre_string);
    
        console.log("location read is: " + location);
    
        queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?sort=date,asc" +
    genre_string + "&locale=*&city=" + location + "&apikey=U9U79W6aroxgXPoxrbUloPyqkHPTVAyD";
    
        console.log(queryURL);
    
        $.ajax({
            url: queryURl,
            method: "GET"
        }).then(function (response) {
        $("#card_container").empty();
        event_array = response._embedded.events;
    
        var new_td;
        var clean_date;
        var timeZone;
        console.log(response);
    
        console.log(event_array);
    
        for (var i = 0; i < event_array.length; i++) {
            if (event_array[i].name != "No Longer on Sale for Web") {
                new_card_row = $("<div></div>" );
                $(new_card_row).addClass("")
            }
        }
    
        })
    });
    
    
    
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
        
    console.log(fetchEventsForCity("Atlanta"));    
    $("#find-events-btn").on("click",fetchEventsForCity);
    
        
    $(document).ready(function(){
       $('.tabs').tabs();
    });
    