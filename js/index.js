// Iteration 1: Names and Input

console.log("I'm ready!");
var hacker1 = "Nalu";
console.log("The driver's name is",  hacker1 + ".")
var hacker2 = "Angel";
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


if (hacker1 > hacker2){
  console.log("The driver's name goes first.");
} else if (hacker1 < hacker2) {
console.log("Yo, the navigator goes first definitely.")
} else {
  console.log("What?! You both have the same name?")
}