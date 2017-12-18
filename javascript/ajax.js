

  
     $("button").on("click", function () {
     // var tlocation = $(this).attr("targetPlace");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        tlocation + "&api_key=dc6zaTOxFJmzC&limit=4";
        console.log("button selected: " + tlocation);

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function (response) {
        console.log(response);



        // =============== creates variaable to hold the query resukts ==================
        
        var results = response.data;
        
        //================ create a variable to track the number of location buttons ====
        var lbuttons = ['California','Hawaii','Japan','Italy'];

        for (var i = 0; i < results.length; i++) {

          var gifDiv = $("<div class='rpics'>");

          var rating = results[i].rating;
          // If(rating !== "pg-13" && rating !== "r") {
          var p = $("<p>").text("Rating: " + rating);

          var locImage = $("<img>");
          locImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(locImage);

          $("#rpics").prepend(gifDiv);


          // ==================================

        }
      });
    });
    