// ---------------Chatper (12-To-13)------------------------------------

//--------------Question (1)-----------------------

// var userInput = prompt("Enter any Character or Number to check");

// var c = userInput.charAt(0)
// var ascii = c.charCodeAt(0);
// if(!userInput)
// {
//     console.log("Please enter a valid character")
// }
// else if(ascii >=48 && ascii <=57 )
// {
//     console.log("you entered a Number");
// }
// else if(ascii >=97 && ascii <=122)
// {
//     console.log("you entered a lower-case character")
// }
// else if(ascii >=65 && ascii <=90)
// {
//     console.log("you entered a upper-case character")
// }
// else
// {
//  console.log("you enter a symbol ");
// }


//--------------Question (2)-----------------------

// var user_Number_01 = Number(prompt("Enter the first Number to compare :"))
// var user_Number_02 = Number(prompt("Enter the second Number to compare :"))

// if(!user_Number_01 || !user_Number_02  )
// {
//   console.log("Number are Missing! \nPlease enter valid number")
// }
// else if(user_Number_01 > user_Number_02)
// {
//     console.log(user_Number_01 +" is greater than " + user_Number_02);
// }
// else if(user_Number_02 > user_Number_01)
// {
//     console.log(user_Number_02 +" is greater than " + user_Number_01);
    
// }
// else if(user_Number_01 === user_Number_02)
// {
//     console.log(user_Number_02 +" is greater than " + user_Number_02);
    
// }

//--------------Question (3)-----------------------

// var user_input = Number(prompt("Enter a Number to Check its Positive or Nagative Number"));

// if(user_input > 0)
// {
//     console.log("Your Number is a Positive Number")
// }
// else if(user_input < 0)
// {
//     console.log("Your Number is a Negative Number")
// }
// else if(user_input === 0)
// {
//     console.log("Your Number is a  is Zero")
// }
// else {
//     console.log("Not a Number")
// }

//--------------Question (4)-----------------------

// var user_input = prompt("Enter Character to See its Vowel or Consonant") ;

// var ch = user_input.charAt(0);
// var ch_loc = ch.toLowerCase();
// if(!user_input)
// {
//     console.log("Enter a valid character")
// }
// else if(ch_loc === "a" || ch_loc === "i"  || ch_loc === "e"  || ch_loc === "o"  || ch_loc === "u"  )
// {
//     console.log("Your Character is Vowel");
// }
// else if(ch.charCodeAt(0) >=48 || ch.charCodeAt(0) <=57)
// {
//     console.log("Your Entered A Number Please Enter A Character!")
// }
// else 
// {
//     console.log("Your Character is Consonant");
// }

//--------------Question (5)-----------------------

// var Ac_Password = "12345";
// var userPassword = prompt("Please enter your password");

// if(userPassword === "")
// {
//     console.log("Please enter your password!")
// }
// else if(userPassword === Ac_Password)
// {
//  console.log("Correct! The Password you Entered matches the original password" )
// }
// else {
//     console.log("Incorrect password")
// }

//--------------Question (6)-----------------------

/// Fixing the if and else statement

//    Before =>

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

//   After =>

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// console.log(greeting);
// }
// else
// {
// greeting = "Good evening";
// console.log(greeting);
// }