function queryRandomMovie() {
    var randomPopularMovieNumber = randomNrGenerator(1, 20 + 1, 0);
    var getPopularMovieUrl =
        "https://api.themoviedb.org/3/movie/popular?api_key=065b7511a9bfd79dd1414272cecbc197&language=en-UK&page=" + randomPopularMovieNumber;

    return $.ajax({
        url: getPopularMovieUrl,
        method: "GET"
    })
}