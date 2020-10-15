// Iteration 1: Names and Input

console.log("I'm ready!");
var hacker1 = "Nalu";
console.log("The driver's name is",  hacker1 + ".")
var hacker2 = "Zalu";
console.log("The navigator's name is " + hacker2 + ".")


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " charatacters.")
  } else if(hacker1.length < hacker2.length) {
    console.log(
    "It seems that the navigator has the longest name, it has " + hacker2.length + " charatacters.")
  } else {
  " Wow, you both have equally long names, "
   + hacker1.length + " characters!"
  }


// Iteration 3: Loops

var arr = [hacker1, hacker2];

var sortArr = arr.sort();

console.log(sortArr);

if (sortArr[0] == sortArr[1]){
  console.log("What?! You both have the same name?");
} else if (sortArr[0] == hacker1) {
console.log("The driver's name goes first.")
} else {
  console.log("Yo, the navigator goes first definitely.")
}

