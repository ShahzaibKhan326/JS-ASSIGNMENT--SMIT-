
// -----------Chapter (34-To-38)-----------------------

// -------------Question (1)---------------------------------

// function showDate()
// {
//   var date= new Date();
//   console.log(date);
// }
 
// showDate();

// -------------Question (2)---------------------------------

// function fullName(first_name,last_name)
// {
//   console.log(first_name + " "+ last_name)
// }

// fullName("shahzaib","khan")

// -------------Question (3)---------------------------------

// function add(num1,num2)
// {
//   console.log("Adding " + num1 + " and " + num2)
//   console.log("Values after Adding : " + (num1+num2))
// }

// add(5,3);

// -------------Question (4)---------------------------------

// function calulater(num1 , num2 ,operater)
// {
//   if(operater === "+")
//   {
//     console.log("Sum of " + num1 + " and " + num2 + " = " + (num1+num2))
//   }
//   else if(operater === "/")
//   {
//     console.log("Divident of " + num1 + " and " + num2 + " = " + (num1/num2))
//   }
//   else if(operater === "*")
//   {
//     console.log("Muiltiplication of " + num1 + " and " + num2 + " = " + (num1*num2))
//   } else if(operater === "-")
//   {
//     console.log("Subtaction of " + num1 + " and " + num2 + " = " + (num1-num2))
//   } else if(operater === "%")
//   {
//     console.log("Remainder of " + num1 + " and " + num2 + " = " + (num1%num2))
//   }
//   else 
//   {
//     console.log("Please Enter Valid operater sign ")
//   }
// }

// var user_num1 = Number(prompt("Enter your First Number."))
// var user_num2 = Number(prompt("Enter your Second Number."))
// var user_operater = prompt("Enter your desire operater \n like :(+,-,%,/,*).")

// calulater(user_num1,user_num2,user_operater);

// -------------Question (5)---------------------------------

// function square(num1)
// {
//  console.log("Square of " + num1 + " is: " + (num1*num1))
// }

// square(5);

// -------------Question (6)---------------------------------

// function fact_num(num1)
// {
//    if(num1 <= 0 ||  num1 === 1)
//    {
//     return console.log("factorial is not defined for negative number")
//    }
//    var result = 1 ;
//    for(let i =2 ; i <= num1; i++)
//    {
//     result *= i;
//    }
//    return result;
// }
// console.log(fact_num(5));

// -------------Question (7)---------------------------------

// function countDown(s_num,e_num)
// {
//    console.log("Your start at "+ s_num + " and end at " + e_num)
//    for(var i = s_num ; i<= e_num; i++)
//    {
//       console.log(i);
//    }
// }

// var starting_num = 1;
// var ending_num =10;
// countDown(starting_num,ending_num)

// -------------Question (8)---------------------------------

// function num_power(num)
// {
//      return num ** (2);
// }

// function calc_hypotneuse(user_base,user_perpendicular)
// {
//   var base = num_power(user_base);
//   var perpendicular = num_power(user_perpendicular)

//   console.log("Base : " + user_base + " with power of 2")
//   console.log("Perpendicular : " + user_perpendicular + " with power of 2")
//   console.log("After calulating Squar of both Values:\nBase : " + base + " " + "Perpendicilar : " + perpendicular )
 
//   var sum_of_squares = base + perpendicular;
//   console.log("Sum of Both Valuse: " + sum_of_squares)
  
//   var hypotneuse_length = Math.sqrt(sum_of_squares);
//   console.log("After taking square of: " + sum_of_squares)
//   console.log("hypotneuse-length : " + hypotneuse_length)
// }

// calc_hypotneuse(3,4)

