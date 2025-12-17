// -------------------Chapter (38-To-44)---------------------------

// -----------------Qustion(1)-----------------------------

// function power(a,b)
// {
//     return Math.pow(a,b)
// }
// let num1 = 2;
// let num2 = 2;
// console.log(num1 + " upon " + num2 + " Equals : " +power(num1,num2)  )
// console.log()

// -----------------Qustion(2)-----------------------------

// ----------A--------------------
// function leapYear(year)
// {
//     if((year % 4 === 0 && year % 100 !== 0)|| (year % 400) === 0)
//     {
//         return year + " is a leap year";
//     }
//     else
//     {
//         return year + " is not a leap year";
//     }
//     return (year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0) ? "leap year" : "not leap year"
// }

// ----------B--------------------
// function leapYear(year)
// {
//     return (year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0) ? "leap year" : "not leap year"
// }

// --------Result----------------
// console.log(leapYear(2000))