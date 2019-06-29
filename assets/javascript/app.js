$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=s4Ko7mizBNP5WvPL6wMHL9r9CcK7OOL6limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function(response) {
            console.log(response);
            var results = response.data;
        
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = result[i].rating;

                var p = $("<p>").text("Rating: " + rating);
                
                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("gifs-appear-here").prepend(gifDiv);

            }
        });
    });
