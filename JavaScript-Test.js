// Question 1: Function Print
function printInt(n) {
  for (i = 1; i <= n; i++) {
    console.log(i);
  }
}
printInt(6);

//Question 2: Reverse Print
function printIntRev(reverseN) {
  for (var i = reverseN; i >= 1; i--) {
    console.log(i);
  }
}
printIntRev(8);

//Question 3: Function checkInput
// Write the function checkInput(x) taking one parameter
// x and return the string ‘number’ if x is a number;
// return the string ‘string’ if x is a string;
// and return ‘boolean’ if x is a boolean.Otherwise returns - 1.
// Examples:
//        checkInput(5) ====> ‘number’
//        checkInput(‘hello’)======> ‘string’
//        checkInput(‘5’) ======> ‘string’
//        checkInput(true)=====> boolean
//        checkInput([1,2,3,4]) =====> -1

function checkInput(x) {
  //   if (typeof x === "number") {
  //     return "number";
  //   } else if (typeof x === "string") {
  //     return "string";
  //   } else if (typeof x === "boolean") {
  //     return "boolean";
  //   } else {
  //     return -1;
  //   }
  // }
 
  

  switch (typeof x)
  case "number":
    return Number;
    case "string":
      return string;
    case "boolean":
      return "boolean"
    default:
      return -1;
  }
}
// solution 3
  // if (typeof x === "number" ||
  //   typeof x === 'string' ||
  //   typeof x 'boolean') {
  //   return typeof;
  // }else {
  //   return -1
  // }
  
  // solution 4 
  // var type = type of x;
  // return type === 'number' || type === 'string' || type === 'boolean' ? type : -1;  
  
  console.log(checkInput(x));


// Question 4: Write the function simpleEvenAdding(num)
// taking a number and add up all the even numbers
// from 1 to num, and return it
// 	Examples: simpleEvenAdding(5) ======> 6 (because 2+4 = 6)
//   simpleEvenAdding(10) ======> 30 (because 2+4+6+8+10 = 30)
//   simpleEvenAdding(11) ======> 30 (because 2+4+6+8+10 = 30)
//            simpleEvenAdding(1) ======> 0
//   simpleEvenAdding(0) =======> 0
// Hint: loop + if conditional + %

// Solution 1 
// function simpleEvenAdding(num) {
//   var solution = 0;
//   for (var i = 0; i <= num; i++) {
//     if (i % 2 === 0) {
//       solution += i;
//     }
//   }
//   return solution;
// }
// Solution 2
for (var i = 0; i <= Number; i += 2){
  solution+=i
}
console.log(simpleEvenAdding(12));

// Question 5: Write the function letterCapitalize(str)
// taking a string and capitalize the first letter of each
// word.The given words will be separated by only one space.
// Examples:
// letterCapitalize(“hello world”) ===========> “Hello World”
// letterCapitalize(“you cannot find the answer online”) =====>
// “You Cannot Find The Answer Online”

// Hint: There is a built-in function in JavaScript that change string
// into uppercase.
// There is also a function to separate string into an array of words.
// (split)

function letterCapitalize(str) {
  var solution = "";
  // separate words
  var words = str.split(" ");
  // first char of each word
  // capitalize it
  var length = words.length;
  for (var i = 0; i < length; i++) {
    solution += " " + words[i][0].toUpperCase() + words[i].slice(1);
  }
​
  return solution.slice(1);
}
​
console.log(letterCapitalize("crazy is as crazy does"));

// Question 6 Write the function simpleReverse(str) 
// taking a string and return the string in reversed order. 
// Examples:
// simpleReverse(‘hello’) ======> ‘olleh’
// simpleReverse(‘I Love Code’) ======> ‘edoC evoL I’

// Solution 1
// var statement = 'hey hows your day';
// function simpleReverse(str) {
//   console.log(str.split('').reverse().join(''));
// }
// simpleReverse(statement);

// Solution2
// function simpleReverse(str) {
//   var solution = ""
//   var length = str.length;
//   for (i = 1; i <= length; i++){
//     solution += str[length - i];
// }
// return solution
// } console.log(simpleReverse("hows it going"));

// Solution 3 (Original Solution I had with minor errors... Now Fixed.)
// Transfer string into array of characters
function simpleReverse(str) {
  var splitString = str.split("");
  var reversedArray = splitString.reverse();
    return reversedArray.join("");
}
console.log(simpleReverse("hey how are you"));

//Question 7 Write the function findDiff(arr) taking an 
// array of numbers as parameter and return the
// difference between the maximum number and the
// minimum number(max - min). 
// 	Examples:
// 	findDiff([1,2,4,6,20, 3]) =======> 19 (Because 20 - 1 = 19)
// 	findDiff([24, 22, 23, 22, 24]) =======> 2 (Because 24 - 22 = 2)
// 	findDiff([1, 1, 1, 1, 1]) =======> 0 
// findDiff([1]) ======> 0;
// findDiff([]) =======> 0;
// Hint: Looking for max, min -> max - min.

function findDiff(arr) {
  // find min && max
  var min = arr[0]
  var max = arr[0]
  var length = array.length

  for (var i = 0; i < length; i++)
    if (arr[i] < min) {
      min = arr[i];
    }
  if (arr[i] > max]) {
    max = arr[i];
  }
  return min - max;
}
console.log(findDiff([1, 2, 4, 5, 67, 3]))
// Solution 1 (My Solution)
// var numArray = [5, 4, 7, 8, 34, 8, 645, 2, 4, 6];
// var max = Math.max (...numArray);
// var min = Math.min(...numArray); {
//   solution = max - min;
//     return solution
// }		console.log(findDiff(arr))

// Question 8 
// Write the function timeConvert(num) taking 
// a number as parameter and return the number 
// of hours and minutes the parameter converts to.
// Separate the number of hours and minutes with a colon.
// 	Example:
// 		timeConvert(61) ======> 1:1
// 		timeConvert(63) =======> 1:3
// 		timeConvert(120)======> 2:0
// 		timeConvert(59)=======> 0:59
//     	Hint: Dividing(/) and modulo(%) the number 60.
function timeConvert(num) {
  // Hours
  var hour = parseInt (num / 60;)
  // Minutes
  var min = num % 60;
  // combine together
  return hour + ":" + min;
}
console.log(timeConvert(346))

// Question 9 
// Write the function findStr(str, long) taking two strings 
// as parameters and return how many str you can find in long.
// Assume Str is not empty string.
// Example:
// 	findStr(“hi”, “dasdhidasdahidashi”) =======> 3
// 	findStr(“o”, “daodo”) =======> 2
// 	findStr(“ha”,”abcde”)=======> 0
// 	findStr(“h”, “hihelloho”)======> 3
// Hint: loop through the long, to check if there is any str
function findStr(str, long) {
  // counter to count the number of string (str) in longLength
  // var counter = 0;
  // var length = long.length;
  // for (var i = 0; i < length - str.length + 1; i++) {
  //   if (str == long.slice(i, i + str.length)) {
  //     counter++
  //   }
  // }
  // return counter;
  // Solution 2 
  return long.split(str).length - 1
} console.log(findStr("ha", "hadfjfashbhasdkfjsdkfjsjhaha"));
    
// Question 10 Write the function selfDividingNumbers(left, right) 
// taking two number bound as parameters and returns an array of 
// every possible self dividing number between 
// them, including the bounds. 
// Hint: A self-dividing number is a number
// that is divisible by every digit it contains.
// For example, 128 is a self - dividing number 
// because 128 % 1 == 0, 128 % 2 == 0 and 128 % 8 == 0. 
// Examples:
// 	selfDividingNumbers(1, 22) ========> [1,2,3,4,5,6,7,8,9,11,12,15,22]
// 	selfDividingNumbers(1, 10) =======> [1,2,3,4,5,6,7,8,9]
// selfDividingNumbers(12, 21) =======> [12, 15]
function selfDividingNumbers(left, right) {
  // loop from left to right
  var solution = [];
  for (var i = left; i <= right; i++) {
    // check if current number is self-dividing number
    if (checkSelfDividing(i)) {
      solution.push(i);
    }
  }
​
  return solution;
}
​
// helper function to check if the num is self-dividing
function checkSelfDividing(num) {
  // change number into string foramat
  var numString = num.toString();
  // Split string into array of char
  var numArray = numString.split("");
​
  var length = numArray.length;
  for (var i = 0; i < length; i++) {
    // if num is not divisible by any digit
    if (num % ParseInt(numArray[i]) !== 0) {
      return false;
    }
  }
  // if num is divisible by all digits
  return true;


// Question 11 Write the function moveZeros(nums) 
// taking an array of numbers and move all 0’s to 
// the end of it while maintaining the relative order 
// of the non - zero elements.For example:
// moveZeros([0,1,0,3,12]) ======> [1,3,12,0,0]
// moveZeros([1,2,0,0,2,312,33,0,0]) ======> [1,2,2,312,33,0,0,0,0]
// moveZeros([0,0,0]) ======> [0,0,0]
// moveZeros([1,2,312,11,2]) =======> [1,2,312,11,2]
function moveZeros(nums) {
  // Loop through the whole array
  var length = nums.length
  var solution = [];
  var counter = 0
  for (var i = 0; i < length; i++){
    if (nums[i] === 0) {
      counter++;
    } else {
      solution.push(nums[i])
    }
  }
  // adding zeros
  while (counter > 0) {
    solution.push(0);
    counter--
  }
  return solution;
}




// // Question 12 Create an average(nums) function that calculates 
// the average of an array of numbers.
// Examples: 
// average([2, 6]) =====> 4
// average([2, 3, 3, 5, 7, 10]) ======> 5
// average([7, 1432, 12, 13, 100]) ======> 312.8
// average([]) ======> 0

// Hint: Sum of all elements / number of elements

function average(num) {
  // loop for sum of all elements
  var sum = 0;
  for (var i = 0; i < num.length; i++) {
    sum += num[i]
  }
  return sum / num.length
}