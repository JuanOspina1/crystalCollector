var crystal = {
    "blue": {
      value: 0
    },
    "dark": {
      value: 0
    },
    "gold": {
      value: 0
    },
    "purple": {
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
    crystal["blue"].value = getRandom(1, 12);
    crystal.dark.value = getRandom(1, 12);
    crystal.gold.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    targetScore = getRandom(19, 120);
     $("#tar").html(targetScore);
     $("#current-score").html(currentScore);
    console.log(crystal.blue.value);
    console.log(crystal.dark.value);
    console.log(crystal.gold.value);
    console.log(crystal.purple.value);
     
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
   $("#blue").on("click", function(){
    addValues(crystal.blue);

   });
   
   $("#dark").on("click", function(){
    addValues(crystal.dark);
 
   });
   
   $("#gold").on("click", function(){
    addValues(crystal.gold);

   });
   
   $("#purple").on("click", function(){
    addValues(crystal.purple);

   });
   
   
   
   
    start();
   
   