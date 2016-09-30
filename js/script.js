" use strict ";

var display = document.getElementById("display");

function yourFunctionName(){
  display.innerHTML = "hello";
}


function oneToTen(){
  display.innerHTML = "";
  for(var i = 1; i < 11; i++) {
    display.innerHTML += i + "<br>";
  }
}


function oddNumbers() {
  display.innerHTML = "";
  for(var i =1; i < 20; i++) {
    if(i%2 != 0) {
      display.innerHTML += i + "<br>";
    }
  }
}

function squares() {
  display.innerHTML = "";
  for(var i = 1; i< 11; i++) {
    var sq = i*i;
    display.innerHTML += sq + "<br>";
  }
}

function random4() {
display.innerHTML = "";
   for(var i = 1; i< 5; i++) {
    var rando = Math.floor(Math.random() * 100);
    display.innerHTML += rando + "<br>";
   }
}

function even() {
  display.innerHTML = "";
    var n = prompt("What number would you like to use?");
    for(var i =1; i < n; i++) {
      if(i%2 == 0) {
        display.innerHTML += i + "<br>";
      }
    }
}

function powers() {
  display.innerHTML = "";
    var m = prompt("What number would you like to use?");
    for(var i =1; i < m; i++) {
      var pow = Math.pow(2,i);
      display.innerHTML += pow + "<br>";
    }
}

function areWeThereYet() {
  while (true) {
  display.innerHTML = "";
  var p = prompt("Are we there yet?").toLowerCase();
  if (p == "yes") {
    display.innerHTML = "Good" + "<br>";
    return false;
    }
  }
}

function triangle() {
  var output = "";
  for(var i = 1; i < 6; i++){
    var line = "";
    for( var j = 1; j <=i; j++) {
        line += "*";
    }
    output += line + "<br>";
  }
  display.innerHTML = output;
}
// Thanks, Roberto!
function tableSquare() {
  var output = "";
  var spacer = "|";
  for(var i = 1; i < 5 ; i++) {
    for(var k = 1; k < 5; k++) {
      output += spacer + (i*k);
      if(k%4 == 0) {
        output += spacer + "<br>";
      }
    }
  }
  display.innerHTML = output;
}

function tableSquares() {
  var m = prompt("what number would you like to use?");
  var output = "";
  var spacer = "|";
  for(var i = 1; i <= m; i++) {
    for(var j = 1; j <= m; j++) {
      output += spacer + (i*j);
      if(j%m == 0) {
        output += spacer + "<br>";
      }
    }
  }
  display.innerHTML = output;
}
