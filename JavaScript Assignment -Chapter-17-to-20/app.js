// ----------------------Chapter (17-To-20)-------------------------------------

//------------------Question (1)------------------------

// var myArray = [ [],[],[]]

//------------------Question (2)------------------------

// var myArray = [ [0,1,2,3],[1,0,1,2],[2,1,0,1]]
// console.log(myArray)

//------------------Question (3)------------------------

// console.log("Counting 1 to 10")
// for(var i = 1 ; i <=10 ; i++)
// {
//     console.log(i);
// }


//------------------Question (4)------------------------

// var user_Table_number = prompt("Enter a number to show its muiltilication table")
// var user_Table_count = prompt("Enter length muiltiplication table")
// var count = user_Table_count;
// if(!user_Table_number || user_Table_number === "" || isNaN(user_Table_number))
// {
//     console.log("Please Enter a valid Number!")
// }
// else
// {
//     for(i=1 ; i<=count ; i++)
// {
//     console.log(user_Table_number + " X " + i + " = " + (user_Table_number*i))
// }
// }

//------------------Question (5)------------------------

var fruits = ["apple","banana","mango","orange","strawberry"];
var count =fruits.length;
for(var i =0; i<=count ; i++ )
{
    console.log("Element at index " + i + " is " + fruits[i])
}