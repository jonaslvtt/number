var correctNumber = 0;
var guessedNumber = 0;
var l = 1;

correctNumber = randomNumber(1,250);

onEvent("newGame", "click", function(){
  correctNumber = randomNumber(1,300);
  setText("response", "");
  for(var i = 1; i <= 9; i++){
    setText("numberArea" + i, "");
    setProperty("numberArea" + i, "background-color", "rgb(242, 242, 242)");
    l = 1;
  }
});

onEvent("submit", "click", function(){
  guessedNumber = getText("numberInput");
  setText("numberInput", "");
  if(guessedNumber == correctNumber){
    setText("numberArea" + l, guessedNumber);
    setProperty("numberArea" + l, "background-color", "rgb(106, 170, 100)");
    setText("response", "Correct!");
  } else if (guessedNumber > correctNumber){
    setText("numberArea" + l, guessedNumber);
    setProperty("numberArea" + l, "background-color", "rgb(0, 162, 179)");
    setText("response", "Guess Lower");
  } else if (guessedNumber < correctNumber){
    setText("numberArea" + l, guessedNumber);
    setProperty("numberArea" + l, "background-color", "rgb(200, 182, 83)");
    setText("response", "Guess Higher");
  }
  l++;
  if(l == 10){
  setText("response", "Answer was " + correctNumber);
  }
});

onEvent("image1", "mouseover", function(){
  showElement("text_area1");
});

onEvent("image1", "mouseout", function(){
  hideElement("text_area1");
});