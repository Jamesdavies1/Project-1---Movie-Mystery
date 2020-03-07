
var movieId = window.localStorage.getItem("movieId");
var moviePosterFromStart = window.localStorage.getItem("moviePoster");
var movieTitleFromStart = window.localStorage.getItem("movieTitle");

$(".poster").attr("src", moviePosterFromStart);
$(".movie-title").text(movieTitleFromStart);

var correctDirectorName;
var correctDirectorPhotoUrl;
var randomDirectorsNames = [];
// ### QUESTION ### 
// why correctyear gives undefined?? 
var correctYear;

firstDirectorsGenerator();

// ### ISSUE ### 
// if the button is clicked then the hover effect stays on
$(document).on("click", ".choice-button", function () {

  if ($(this).text() === correctYear) {

    $(".poster").attr("src", "./images/correct.png")

    setTimeout(function () {
      $(".poster").attr("src", "./images/heres-how.png")
    }, 1200);
    setTimeout(function () {
      $(".poster").attr("src", correctDirectorPhotoUrl)
    }, 2400);
    setTimeout(function () {
      directorsGenerator();
    }, 3500);
  }

  if ($(this).text() === correctDirectorName) {

    $(".poster").attr("src", "./images/correct.png")

    setTimeout(function () {
      $(".poster").attr("src", "./images/heres-how.png")
    }, 1200);
    setTimeout(function () {
      $(".poster").attr("src", correctDirectorPhotoUrl)
    }, 2400);
    setTimeout(function () {
      directorsGenerator();
    }, 3500);
  }

  if ($(this).text() !== correctDirectorName) {
    $(".poster").attr("src", "./images/false.png");
    setTimeout(function () {
      directorsGenerator();
    }, 1000);
  }
});

$(document).on("click", ".back-to-start-button", function () {
  window.location.replace("index.html");
});

