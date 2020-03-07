function firstYearsGenerator() {
  $(".game-card-content").html(null)
  $(".game-question").text("How many years ago this movie was released?");
  buttonShuffler();

  var getPopularMovieUrl =
    "https://api.themoviedb.org/3/movie/" + movieId + "?api_key=065b7511a9bfd79dd1414272cecbc197&language=en-UK";

  $.ajax({
    url: getPopularMovieUrl,
    method: "GET",
  }).then(function (movieData) {
    console.log(movieData)

    var correctReleaseYear = parseInt(movieData.release_date.slice(0, 4));
    var correctYearsAgo = moment().format("YYYY") - correctReleaseYear;
correctYear = correctYearsAgo;


    for (var i = 0; i < 3; i++) {
      $(".choice-" + i).text(Math.floor(Math.random() * 50));
    }
    $(".choice-3").text(correctYearsAgo);

  });

}