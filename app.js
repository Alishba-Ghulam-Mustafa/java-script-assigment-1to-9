//Q1 : Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”
//let city=prompt("Enter your city name please");
//if(city== "Karachi"){
//document.write("Welcome to city of lights")
//}
//else(
//document.write("Welcome to"+city)
//)

//Q2 :  Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter your gender");
// if(gender=="Male"){
//     document.write("Good Morning Sir")
// }
// else if(gender=="Female"){
//     document.write("Good Morning Mam");
// }
// else(
//     document.write("invalid gender")
// )

// Q3 : Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

// let input=prompt("Enter traffic light color");
// if(input=="red"){
//   document.write("Must Stop");
// }
// else if(input=="yellow"){
// document.write("Ready to Move");
// }
// else if(input=="green"){
//     document.write("Move now")
// }
//Q4 : Write a program to take input remaining fuel in car (in 
// litres) from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”;

// let currentfuel=prompt("Enter remaining fuel in your car ");
// if(currentfuel<0.25+"literes"){
//     document.write("please refill the fuel in your car");

// }
// else{
//     document.write("fuel is enough");
// }
    
//Q4 :Run this script, & check whether alert message would be
//displayed or not. Record the outputs.

//a                             
// let a=4;
// if(++a ===5){
//     alert("given condition for variable a is true");
// }

//b
// let b= 82;
// if(b++===83){
//     alert("given condition for variable b is true");
// }

//c
// let c =12;
// if(c++===13){
//     alert("Condition 1 is true");
// }                    
// if(c===13){
//     alert("Condition 2 is true");
// }
// if(++c<14){
//     alert('condition 3 is true');
// }
// if(c===14){
//     alert('condition 4 is true');
// }

//d
// let materialCost = 20000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// let materialcost= 20000;


//e
// if(true){
//     alert("True");
// }
// if(false){
//     alert("False");
// }

//f
// if("car"<"cat"){
//     alert("car is smaller than cat");

//Q7 : Store a secret number (ranging from 1 to 10) in a variable.
//Prompt user to guess the secret number
// const secretNumber = 5;

//a : If user guesses the same number, show “Bingo! Correct
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.
// const guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
// if (guess === secretNumber) {
//     document.write("Bingo! Correct answer.");
// } else if (guess + 1 === secretNumber) {
//     document.write("Close enough to the correct answer.");
// } else {
//     document.write("Wrong guess. Try again!");
// }

 //Q8 : Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.
    //  let num =prompt("ENTER A NUMBER");
    //  if(num%2!==0){
    //     alert(" the number is divisible by 3.");
    //  }

///Q9 : Write a program that checks whether the given input is an
//even number or an odd number
// let num =prompt("Enter a Number");
// if(num%2==0){
//document.write("It's an Even Number");
// }
// if(num%2!==0){
//document.write("It's an Odd Number");
//}

//Q10 : Write a program that takes temperature as input and 
//shows a message based on following criteria.
// let Temperature=prompt("How is the weather today");
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then "OMG! Today’s weather is so Cool."
// if(Temperature>40){
//     document.write("It is too hot outside.");
// }
// else if(Temperature>30){
//     document.write("The Weather today is Normal");
// }
// else if(Temperature>20){
//     document.write("Today’s Weather is cool.");
// }
// else if(Temperature>10){
//     document.write("OMG! Today’s weather is so Cool");
// }


///Q11 : Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user


// let num1 = parseInt(prompt("Enter first number:"));
// let num2 = parseInt(prompt("Enter second number:"));
// let operation = prompt("Enter operation:\n + \n - \n * \n % \n /");

// if (operation === "+"){
//   document.write(num1 + num2);
// } 
// else if (operation === "-"){
//   document.write(num1 - num2);
// }
// else if (operation === "*"){
//   document.write(num1 * num2);
// }
// else if (operation === "/"){
// document.write(num1 /num2);
// }
// else if(operation==="%"){
// document.write(operation=="%");
// }
