function firstDirectorsGenerator() {

  buttonShuffler();

  queryImageMeta().then(function (configResponse) {
    var baseUrl = configResponse.images.base_url;
    var imageSize = configResponse.images.backdrop_sizes[0];

    queryMovieCreditsById(movieId).then(function (movieCredits) {
      //VERNER REMIND ME TO SHOW YOU A QUICK WAY TO DO THIS
      for (var i = 0; i < movieCredits.crew.length; i++) {
        if (movieCredits.crew[i].job === "Director") {
          correctDirectorName = movieCredits.crew[i].name;
          directorUrl = movieCredits.crew[i].profile_path;
          correctDirectorPhotoUrl =
            baseUrl + imageSize + directorUrl;
        }
      }
    });

    for (var i = 0; i < 3; i++) {
      queryRandomMovie().then(function (randomMovie) {
        var randomNumber = randomNrGenerator(0, 19 + 1);
        var randomMoviesId = randomMovie.results[randomNumber].id;
    
        queryMovieCreditsById(randomMoviesId).then(function (creditsResponse) {
          var randomDirector = "";
          for (i = 0; i < creditsResponse.crew.length; i++) {
            if (creditsResponse.crew[i].job === "Director") {
              randomDirector = creditsResponse.crew[i].name;
            }
          }

          randomDirectorsNames.push(randomDirector);

          postDirectors();
        });
      });
    }
  });


  function postDirectors() {

    for (var i = 0; i < 3; i++) {
      $(".choice-" + i).text(randomDirectorsNames[i]);
    }
    $(".choice-3").text(correctDirectorName);
  };
};