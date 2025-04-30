let day = 6;
let message;

switch (day) {
  case 1: message = "Monday"; break;
  case 2: message = "Tuesday"; break;
  case 3: message = "Wednesday"; break;
  case 4: message = "Thursday"; break;
  case 5: message = "Friday"; break;
  case 6: message = "Saturday - It's the weekend!"; break;
  case 7: message = "Sunday - It's the weekend!"; break;
  default: message = "Invalid day";
}

console.log(message);
