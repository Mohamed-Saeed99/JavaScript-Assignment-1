// Assignment 1





// // 1- Write a program that allow to user enter number then printit
// let numQ1=parseInt(prompt("enter number"));
// document.write(numQ1);







// // 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// let numQ2=parseInt(prompt("enter number"));
// if (numQ2 %3===0 && numQ2 %4===0 ){
//     document.write("yes")
// }else {
//     document.write("no")
// }







// // 3- Write a program that allows the user to insert 2 integers then print the max
// let numQ3=parseInt(prompt("enter number"));
// let numQ3_2=parseInt(prompt("enter number"));
// if (numQ3>numQ3_2){
//     document.write(numQ3)
// }else {
//     document.write(numQ3_2)
// }







// // 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive
// let numQ4=parseInt(prompt("enter number"));
// if (numQ4 <0 ){
//     document.write("negative")
// }else {
//     document.write("postive")
// }







// //  5- Write a program that take 3 integers from user then print the max element and the min element
// let numQ5=parseInt(prompt("enter number"));
// let numQ5_2=parseInt(prompt("enter number"));
// let numQ5_3=parseInt(prompt("enter number"));
// let max=0;
// let min=0;
// if (numQ5>numQ5_2>numQ5_3){
//     max=numQ5;
//     min=numQ5_3;
// } else if (numQ5>numQ5_3>numQ5_2){
//     max=numQ5
//     min=numQ5_2
// } else if (numQ5_2>numQ5>numQ5_3){
//     max=numQ5_2;
//     min=numQ5_3;
// }else if (numQ5_2>numQ5_3>numQ5){
//      max=numQ5_2;
//      min=numQ5;
// }else if (numQ5_3>numQ5>numQ5_2){
//      max=numQ5_3;
//      min=numQ5_2;
// }else{
//      max=numQ5_3;
//      min=numQ5;
// }
// document.write(`the max num is ${max} and the min num is ${min}`)









// // 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// let numQ6=parseInt(prompt("enter number"));
// if (numQ6 %2===0 ){
//     document.write("even")
// }else {
//     document.write("odd")
// }










// //  8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// let vowelOrNot =prompt("enter char");
// if ( vowelOrNot === "a"||"e"||"i"||"o"||"u"){
//     document.write("Vowel")
// }else {
//     document.write("Consonat")
// }








// //  9- Writeaprogramthat allowsusertoinsertintegerthenprintallnumbersbetween1to that’s number
// let numQ9=parseInt(prompt("enter number"));
// for(let i=1; i<=numQ9;i++){
//     document.write(i)
// }







//  //  10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
//  let numQ10=parseInt(prompt("enter number"));
//  for(let i=1; i<=12;i++){
//     document.write(numQ10*i+" ")
//  }






//  //  11- Write a program that allows user to insert number then print all even numbers between 1 to this number
//  let numQ11=parseInt(prompt("enter number"));
// for(let i=1; i<=numQ11;i++){
//     if (i %2 ===0){
//         document.write(i +" ");
//     }
// };







// //  12- Write a program that take two integers then print the power
// let numQ12=parseInt(prompt("enter number"));
// let numQ12_2=parseInt(prompt("enter number"));
// document.write(numQ12**numQ12_2);







// //  12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// let deg;
// let sum=0;
// for(let i=1;i<=5;i++){
//      deg=parseInt(prompt(`enter marks of subject ${i}`));
//      sum+=deg;
// };
// let avg = sum/5;
// document.write(`sum= ${sum}
// avg=${avg}`);









// //  13-Write a program to input month number and print number of days in that month.
// function getDaysInMonth(monthNumber) {
//      if (monthNumber < 1 || monthNumber > 12) {
//          return "Invalid month number. Month number should be between 1 and 12.";
//      } else if (monthNumber === 2) {
//          return "Days in Month: 29";
//      } else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
//          return "Days in Month: 30";
//      } else {
//          return "Days in Month: 31";
//      }
//  }
//  let monthNumber = parseInt(prompt("Enter the month number:"));
//  let result = getDaysInMonth(monthNumber);
//  document.write(result);








// //  14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade  Percentage >= 90%: Grad APercentage >= 80%: Grad B Percentage >= 70%: Grad C Percentage >= 60%: Grad D Percentage >= 40%: Grad E Percentage < 40%: Grad F
// function calculatePercentage(physics, chemistry, biology, mathematics, computer) {
//      let totalMarks = physics + chemistry + biology + mathematics + computer;
//      let percentage = (totalMarks / 500) * 100;
//      return percentage;
//  }
//  function assignGrade(percentage) {
//      if (percentage >= 90) {
//          return 'Grade A';
//      } else if (percentage >= 80) {
//          return 'Grade B';
//      } else if (percentage >= 70) {
//          return 'Grade C';
//      } else if (percentage >= 60) {
//          return 'Grade D';
//      } else if (percentage >= 40) {
//          return 'Grade E';
//      } else {
//          return 'Grade F';
//      }
//  }
 
//  let physics = parseFloat(prompt("Enter Physics marks:"));
//  let chemistry = parseFloat(prompt("Enter Chemistry marks:"));
//  let biology = parseFloat(prompt("Enter Biology marks:"));
//  let mathematics = parseFloat(prompt("Enter Mathematics marks:"));
//  let computer = parseFloat(prompt("Enter Computer marks:"));
 
//  let percentage = calculatePercentage(physics, chemistry, biology, mathematics, computer);
//  let grade = assignGrade(percentage);
 
//  // Output
// document.write("Percentage: " + percentage.toFixed(2) + "%");
// document.write("Grade: " + grade);












// //  15- Write a program to print total number of days in month
// function getTotalDaysInMonth(monthNumber) {
//      switch(monthNumber) {
//          case 1: 
//          case 3: 
//          case 5:
//          case 7: 
//          case 8: 
//          case 10: 
//          case 12:
//              return 31;
//              break;
//          case 4: 
//          case 6: 
//          case 9: 
//          case 11:
//              return 30;
//              break;
//          case 2: 
//                  return 29; 
//          default:
//              return "Invalid month";
//      }
//  }
//  let NumberOfMonth=parseInt(prompt("enter number of month"));
// document.write(getTotalDaysInMonth(NumberOfMonth));







// //  16- Write a program to check whether an alphabet is vowel or consonant
// function checkVowel(char) {
//      switch(char) {
//          case "a": 
//          case "e": 
//          case "i":
//          case "o": 
//          case "u":
//              return "vowel character"; 
//              break;
//          default:
//              return "consonant character";
//      }
//  }
//  let checkChar=prompt("enter character to check");
// document.write(checkVowel(checkChar));







// //  17- Write a program to find maximum between two numbers
// function findMaximum(numQ17, numQ17_2) {
//      switch(true) {
//          case numQ17 > numQ17_2:
//              return numQ17;
//          case numQ17_2 > numQ17:
//              return numQ17_2;
//          default:
//              return "Numbers are equal";
//      }
//  }
//  numQ17=parseInt(prompt("enter number one"));
//  numQ17_2=parseInt(prompt("enter number two"));
// document.write(findMaximum(numQ17, numQ17_2));  






// //  18- Write a program to check whether a number is even or odd
// function evenOrOdd(numQ18) {
//      switch(true) {
//          case numQ18 %2===0:
//              return "even";
//              break;
//          default:
//              return "odd";
//      }
//  }
//  numQ18=parseInt(prompt("enter number"));
// document.write(evenOrOdd(numQ18));  








// //  19- Write a program to check whether a number is positive or negative or zero
// function postiveOrNegativeOrZero(numQ19) {
//      switch(true) {
//          case numQ19===0:
//              return "zero";
//              break
//          case numQ19>0:
//              return "positive";
//              break;
//           default:
//              return "negative"
//      }
//  }
//  numQ19=parseInt(prompt("enter number"));
// document.write(postiveOrNegativeOrZero(numQ19));  









// //  20- Write a program to create Simple Calculator
// function calculate(numQ20, operator, numQ20_2) {
//      switch(operator) {
//          case '+':
//              return numQ20 + numQ20_2;
//          case '-':
//              return numQ20 - numQ20_2;
//          case '*':
//              return numQ20 * numQ20_2;
//          case '/':
//              if(num2 !== 0) {
//                  return numQ20 / numQ20_2;
//              } else {
//                  return "Error: Division by zero";
//              }
//          default:
//              return "Invalid operator";
//      }
//  }
 
//  let number1 = parseInt(prompt("enter numQ20"));
//  let number2 = parseInt(prompt("enter numQ20_2"));
//  let operation = prompt("enter operator");
 
//  document.write(`Result of ${number1} ${operation} ${number2} is: ${calculate(number1, operation, number2)}`);
