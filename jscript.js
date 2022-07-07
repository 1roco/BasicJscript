// BasicJscript Free code camp certification 300hrs!

//Explore Differences Between the var and let Keywords
// var camper = "James";
// var camper = "David";
// console.log(camper);
// let camper = "James";
// let camper = "David";
// console.log(camper);

// const FAV_PET = "Cats";
// FAV_PET = "Dogs";

//const myString = "FirstLine\n\t\\SecondLine\nThirdLine";
//console.log(myString);

// Setup
// let lastNameLength = 0;
// const lastName = "Lovelace";

// // Only change code below this line
// lastNameLength = lastName.length;
// console.log(lastNameLength);

// const myStr = "FirstLine\n\t \\SecondLine\n ThirdLine"; // Change this line
// console.log(myStr);

// const myNoun = "dog ";
// const myAdjective = "big ";
// const myVerb = "ran ";
// const myAdverb = "quickly";

// // Only change code below this line
// const wordBlanks = "The " + myAdjective + myNoun + myVerb + myAdverb ; // Change this line
// // Only change code above this line
// console.log(wordBlanks);

// Setup
// const myArray = [["John", 23], ["cat", 2]];
// console.log(myArray);
// // Only change code below this line
// const removedFromMyArray = myArray.pop();
// console.log(removedFromMyArray);

//local and global scope example
// const loc = "fii";
// function myTest() {
//    // const loc = "foo";
//     console.log(loc);
//   }
  
//   myTest();
//   //console.log(loc);
  
//Return or not to return and therefore undefined
// let sum = 3;

// function addSum(num) {
//   sum = sum + num;
//   //return(sum);
// }

// addSum(3);
// console.log(sum);

//More return or not return undefined
// let sum = 0;

// function addThree() {
//   sum = sum + 3;
//   return sum;
// }

// // Only change code below this line
// function addFive() {
// sum = sum + 5;
// return sum;
// }
// // Only change code above this line

// addThree();
// console.log(sum);


// addFive();
// console.log(sum);

//Return that returns?
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);
console.log(processed);