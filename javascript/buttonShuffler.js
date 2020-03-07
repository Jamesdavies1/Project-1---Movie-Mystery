function buttonShuffler() {
var buttonClassesArray = ["choice-0", "choice-1", "choice-2", "choice-3"];
var shuffledButtonClasses = shuffler(buttonClassesArray)

// Fisher-Yates shuffle algorithm
function shuffler(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

for (var i = 0; i < shuffledButtonClasses.length; i++) {
  var buttonTag = $("<button>").addClass("button is-info is-inverted is-outlined choice-button").addClass(shuffledButtonClasses[i]);
  var cardContent = $(".cardcontent");
  cardContent.append(buttonTag)
};
}

