// ### QUESTION ### 
// 1. randomposters are pushed from ajax scope to randomPosterArray 
// 2. console.log shows that the posters are in an array 
// 3. however, it is impossible to access these items in that array: randomPostersArray[1] = undefined
// 4. at the moment data is accessible only when posted to HTML via jquery
var randomPostersArray = [];
var randomMovieId = [];
var randomMovieTitle = [];


// ### QUESTION ### 
// Why cannot I use this loop without the postersToPage function?
function postersToPage() {
  // ### QUESTION ### 
  // should this for loop also be within the document.ready function? 
  // if nested to the document.ready, the randomPosterArray becomes inaccessible :(
  for (var i = 0; i < 11 + 1; i++) {
    $("#" + i).attr({ "src": randomPostersArray[i], "data-movie-id": randomMovieId[i], "data-movie-title": randomMovieTitle[i] });
  };
};


queryImageMeta().then(function (metaData) {
  var baseUrl = metaData.images.base_url;
  var imageSize = metaData.images.backdrop_sizes[0];

  for (var i = 0; i < 12; i++) {
    queryRandomMovie().then(function (randomPopularMovie) {

      var randomIndex = randomNrGenerator(0, 19 + 1)
      var posterUrl = randomPopularMovie.results[randomIndex].poster_path;
      var movieId = randomPopularMovie.results[randomIndex].id;
      var movieTitle = randomPopularMovie.results[randomIndex].title;

      randomPostersArray.push(baseUrl + imageSize + posterUrl);
      randomMovieId.push(movieId);
      randomMovieTitle.push(movieTitle);

      // ### QUESTION ### 
      // why cannot I call this function outside ofthe queryRandomMovie's scope?
      postersToPage()

    });
  };
});

$(document).ready(function () {
  // ### QUESTION ### how to get only the posterIMG link out from ajax's scope?
  $("img").click(function () {
    window.location.replace("game.html");
    window.localStorage.setItem("movieId", $(this).attr("data-movie-id"));
    window.localStorage.setItem("movieTitle", $(this).attr("data-movie-title"));
    window.localStorage.setItem("moviePoster", $(this).attr("src"));
  });
});

