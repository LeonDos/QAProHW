var youVariable = prompt("What will we count? Select the desired variable. l - length, t - time, w - weight");
var youValue = prompt("Enter value: ");

 switch (youVariable) {
    case "l":
      var youValue2 = youValue * 1000;
      alert((youValue) + " km equals " + (youValue2) + " meters");
          break;
    case "t":
      var youValue2 = youValue * 60;
      alert((youValue) + " h equals " + (youValue2) + " min");
          break;
    case "w":
      var youValue2 = youValue * 1000;
      alert((youValue) + " kg equals " + (youValue2) +  " grams");
          break;
    default:
      alert("You entered an incorrect value");
 }