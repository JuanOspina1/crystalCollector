var crystal = {
    "red": {
      value: 0
    },
    "orange": {
      value: 0
    },
    "yellow": {
      value: 0
    },
    "green": {
      value: 0
    }
  };
   
   
  // track scores 
   
  var currentScore = 0;
  var targetScore = 0;
  var winCount = 0;
  var lossCount = 0;
   
   
  // Functions
  function getRandom(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
  }
  function start () {
    currentScore = 0;
     
    $("#tar").empty();
    $("#current-score").empty();
    crystal["red"].value = getRandom(1, 12);
    crystal.orange.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    targetScore = getRandom(19, 120);
     $("#tar").html(targetScore);
     $("#current-score").html(currentScore);
    console.log(crystal.red.value);
    console.log(crystal.orange.value);
    console.log(crystal.yellow.value);
    console.log(crystal.green.value);
     
  }
   
   function addValues(crystal) {
     currentScore = currentScore + crystal.value;
      $("#current-score").html(currentScore);
     checkWin();
      
   }
   
   
  function checkWin () {
    if (currentScore === targetScore) {
      alert("You win!");
      winCount ++;
      $("#wins").html(winCount);
      start ();
    }
    else if (currentScore > targetScore) {
      alert("You lose!");
      lossCount++;
      $("#losses").html(lossCount);
      start ();
    }
  }
   $("#red").on("click", function(){
    addValues(crystal.red);

   });
   
   $("#orange").on("click", function(){
    addValues(crystal.orange);
 
   });
   
   $("#yellow").on("click", function(){
    addValues(crystal.yellow);

   });
   
   $("#green").on("click", function(){
    addValues(crystal.green);

   });
   
   
   
   
    start();
   
   