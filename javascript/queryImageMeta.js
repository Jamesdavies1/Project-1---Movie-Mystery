function queryImageMeta(){
    var imagesConfigUrl = "https://api.themoviedb.org/3/configuration?api_key=065b7511a9bfd79dd1414272cecbc197";

  return $.ajax({
      url: imagesConfigUrl,
      method: "GET"
  
  });
};