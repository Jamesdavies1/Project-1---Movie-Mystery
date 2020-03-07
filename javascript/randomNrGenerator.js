function randomNrGenerator(min, max, excluded) {
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    if (randomNumber === excluded) randomNumber++;
    return randomNumber;
  };