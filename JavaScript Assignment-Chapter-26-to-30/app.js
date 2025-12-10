// ---------------------Chapter (26-To-30)------------------------------

// ------------------Qustion (1)--------------------

// var user_integer = prompt("Enter a positive integer \n Example 1.4 0.3 or 4.6 ");
// // var user_integer = 3.5; //for direct value assign
// console.log("Number : "+user_integer);

// var round_integer = Math.round(user_integer)
// console.log("Round off value : "+round_integer);

// var floor_integer  = Math.floor(user_integer)
// console.log("Floor value : "+floor_integer);

// var ceil_integer = Math.ceil(user_integer)
// console.log("Ceil value : "+ceil_integer);

// ------------------Qustion (2)--------------------

// var user_integer = prompt("Enter a positive integer \n Example 1.4 0.3 or 4.6 ");
// var user_integer = -2.673; //for direct value assign
// console.log("Number : "+user_integer);

// var round_integer = Math.round(user_integer)
// console.log("Round off value : "+round_integer);

// var floor_integer  = Math.floor(user_integer)
// console.log("Floor value : "+floor_integer);

// var ceil_integer = Math.ceil(user_integer)
// console.log("Ceil value : "+ceil_integer);

// ------------------Qustion (3)--------------------

// var number = prompt("Enter a Nagative to Value to convert to positive value \n Example : -2 -44 or -4")
// console.log("Input : "+number);
// var conv_num = Math.abs(number);
// console.log("Output : "+conv_num)

// ------------------Qustion (4)--------------------

var dice_limit = 100;

var random_dice = Math.random();

var final_dice = (random_dice*dice_limit) + 1;
console.log(final_dice)
var floor_dice = Math.floor(final_dice);
console.log(floor_dice)
