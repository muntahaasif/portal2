// write a function that displays current date and time
// function displayDateTime (){}
// var now = new Date();
// var than = now.toLocaleString();
// document.getElementById("datetime").innerHTML = than;
// setInterval(displayDateTime, 1000);

// write a function that takes first and last name and then it greets the user using his full name
// function greetUser() {
//     var first = document.getElementById("firstName").value;
//     var last = document.getElementById("lastName").value;
//     var fullName = first + " " + last;
//     document.getElementById("greeting").innerHTML = "Welcome, " + fullName + "!";
// }

// write a function that adds two numbers (input by user) and return the sum of two numbers
// var num1 = +prompt("enter your first fav num");
// var num2 = +prompt("enter your sec fav number");
// console.log( num1 + num2);

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// 5. Write a function that squares its argument.
// function square(num) {
//   return num * num;
// }
// var result = square(7);
// console.log("Square is: " + result); 

// 6. Write a function that computes factorial of a number.
// function factorial(n) {
  // var res = 1;
  // for (let i = 1; i <= n; i++) {
    // res *= i;
  // }
  // return res;
// }
// var res = factorial(10);
// console.log("Factorial is: " + res);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.
// function showCounting(first, last){
//   for (var i = first; i <=last; i++){
//   console.log(i);
//   }
// }
// showCounting(1, 25);

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// function calculationHyp (base , perpendi){
//   function square(num){
//     return num * num;
//   }
//   var hypo = Math.sqrt(square(base) + square(perpendi));
//   document.write("Hypotenous is: " + hypo);
// }
// calculationHyp(2,4);

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()
// function calculateHypo () {
  // var base = +prompt("enter the base number");
  //  var perpen = +prompt("enter perpendicular number");
  //  function calculateSquare(num){
    // return num * num;
  //  }
  //  var hypo = Math.sqrt(calculateSquare(base) + calculateSquare(perpen));
  //  console.log("Base: " + base);
  //  console.log("Perpendicular: " + perpen);
  //  console.log("Hypotenous: " + hypo);
// }
// calculateHypo();

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables
// function areaCalculate (width , height){
//   return width * height;
// }
// var area1 = areaCalculate(10, 15);
// console.log("Area (values);" , area1);
// var width = 3;
// var height = 8;
// var area2 = areaCalculate(width, height);
// console.log("Area (variables);" , area2);

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam
    // function checkPalindrome() {
    //   var str = document.getElementById("userInput").value;
    //   var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // clean string
    //   var reversedStr = cleanStr.split('').reverse().join('');

    //   if (cleanStr === reversedStr) {
    //     document.getElementById("result").innerText = "its a palindrome word";
    //   } else {
    //     document.getElementById("result").innerText = "its not a palindrome word";
    //   }
    // }

//     11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'
    // function capitalizeInput() {
    //   var str = document.getElementById("userInput").value;
    //   var words = str.split(" ");
    //   for (var i = 0; i < words.length; i++) {
    //     if (words[i].length > 0) {
    //       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    //     }
    //   }
    //   var result = words.join(" ");
    //   document.getElementById("result").innerText = result;
    // }

//     12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'




