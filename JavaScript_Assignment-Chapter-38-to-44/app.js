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

// -----------------Qustion(3)-----------------------------

// function calcSides(a,b,c)
// {
//     return (a+b+c)/2;
// }

// function calcArea(a,b,c)
// {    
//      var s = calcSides(a,b,c);
//      return Math.sqrt(s*(s-a)*(s-b)*(s-c));
// }
// var Area = calcArea(3,2,4).toFixed(5);
// console.log("Area of triangle: "+ Area)

// -----------------Qustion(4)-----------------------------

// var user_mark_01 = Number(prompt("Enter First Subject Mark!"))
// var user_mark_02 = Number(prompt("Enter Second Subject Mark!"))
// var user_mark_03 = Number(prompt("Enter Third Subject Mark!"))

// var user_mark_01 = 95;
// var user_mark_02 = 60;
// var user_mark_03 = 40;

// var total_mark = 300;
// var obtain_mark = user_mark_01 + user_mark_02 + user_mark_03;

// function calculatePercentage(obtain_mark,total_mark)
// {
//     return (obtain_mark/total_mark)*100
// }

// function calculateAverage(obtain_mark,count)
// {
//      return obtain_mark/count
// }

// function main()
// {
//       var percentage = calculatePercentage(obtain_mark,total_mark);
//       var average = calculateAverage(obtain_mark,3)

//       console.log("Percentage: " + percentage.toFixed(2) + "%")
//       console.log("average: " + average.toFixed(2))
// }

// main()

// -----------------Qustion(5)-----------------------------

// function checkIndex(str,c)
// { 
//     var found =false;
//     var index ;
//   for(var i=0; i < str.length;i++)
//   {
//     if(str[i]==c)
//     {
//        index = i;
//        found=true;
//        break;
//     }
//   }

//   if(found)
//   {
//     console.log("found at index: " + index)
//   }
//   else 
//   {
//     console.log(c + " is not found")
//   }

//   return index;
// }

// checkIndex("shahzaib","k")

// -----------------Qustion(6)-----------------------------

// function deleteVowels(str)
// {
//     var vowels = ["a","i","o","u","e"]
//     var letters = str.toLowerCase().split("");
//     var result =[];
// 
//    if(str.length>25)  
//    {
//       return "sentence is too long (max 25 character)"
//    }      
//     for(var i = 0; i< letters.length ;i++)
//     {
//         var isVowel = false;
//         for(var j = 0;j<vowels.length;j++)
//         {
//             if(letters[i]=== vowels[j])
//             {
//                 isVowel=true;
//                 break;
//             }
//         }
//         if(!isVowel)
//         {
//             result.push(letters[i])
//         }
//     }
//     console.log(result.join(""));
// }
// deleteVowels("shahzaib");

// -----------------Qustion(7)-----------------------------

// function countDoubleVowels(text)
// {
//     var count = 0;

//     for(var i=0;i<text.length-1;i++)
//     {
//      var pair = text[i]+ text[i+1];
//      switch (pair.toLowerCase())
//      {
//             case "aa":
//             case "ae":
//             case "ai":
//             case "ao":
//             case "au":
//             case "ea":
//             case "ee":
//             case "ei":
//             case "eo":
//             case "eu":
//             case "ia":
//             case "ie":
//             case "ii":
//             case "io":
//             case "iu":
//             case "oa":
//             case "oe":
//             case "oi":
//             case "oo":
//             case "ou":
//             case "ua":
//             case "ue":
//             case "ui":
//             case "uo":
//             case "uu":
//             count++;
//             break;
//      }
//     }
//     return count;
// }
// var sentence ="Please read this application and give me gravity";
// console.log("Count of Double Vowels: " +countDoubleVowels(sentence))