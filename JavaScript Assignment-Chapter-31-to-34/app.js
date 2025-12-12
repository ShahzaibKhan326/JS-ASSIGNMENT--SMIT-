// ----------------------Chapter (31-To-34)--------------------------------

// -------------------Question (1)------------------------------

// var my_Date =  new Date();
// console.log(my_Date)

// -------------------Question (2)------------------------------

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var my_Date =  new Date();
// var my_Month = my_Date.getMonth();
// console.log("Current month: "+months[my_Month])

// -------------------Question (3)------------------------------

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var my_Date =  new Date();
// var my_day = my_Date.getDay();
// console.log("Today : "+ days[my_day])

// -------------------Question (4)------------------------------

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var my_Date =  new Date();
// var my_day = my_Date.getDay();

// if(days[my_day] === "sunday" || days[my_day] === "saturday" )
// {
//     console.log("its fun day");
// }
// else {
//     console.log("it working day")
// }


// -------------------Question (5)------------------------------

// var date = new Date();
// var My_Date = date.getDate()
// console.log("Todays Date : "+My_Date);
// if(My_Date <= 15)
// {
//     console.log("First Fiften Days of Month")
// }
// else 
// {
//     console.log("Last Fiften Days of Month")
// }

// -------------------Question (6)------------------------------

// var current_date = new Date();
// console.log("Current Date : " + current_date)

// var  Elapsed_ms = current_date.getTime();
// console.log("Elapsed milliseconds since January 1, 1970 : "+Elapsed_ms);
// var Elapsed_minutes = Math.floor(Elapsed_ms/60000)
// console.log("Elapsed minutes since January 1, 1970 : " + Elapsed_minutes);

// -------------------Question (7)------------------------------

// var date = new Date();
// console.log(date);
// var hour = date.getHours();

// if(hour >= 0 &&  hour < 12  )
// {
//     console.log("Good Morning ")
// }
// else if(hour >= 12 &&  hour < 17  )
// {
//     console.log("Good Afternoon ")
// }
// else if(hour >= 17 &&  hour < 21  )
// {
//     console.log("Good Evening ")
// }
// else 
// {
//     console.log("Good Night")
// }

// -------------------Question (8)------------------------------

// var laterDate = new Date(2020,11,31);
// console.log("Later Date: "+laterDate);

// -------------------Question (9)------------------------------

// var Ramdan_date = new Date(2025,2,1)
// console.log("Ramdan Date : "+Ramdan_date);
// var current_date = new Date();
// console.log("Current Date : "+current_date)
// var diff =  current_date - Ramdan_date;
// var day = (1000*60*60*24)
// var days = Math.floor(diff/day)
// console.log(days + " days have passed since 1st Ramdan,2025")

// -------------------Question (10)------------------------------

// var date = new Date("2025-9-1")
// var current_date = new Date();
// var diff = current_date - date;
// console.log("On refrence date : " + date )
// console.log(Math.floor(diff/(1000)) + " seconds had passed")

// -------------------Question (11)------------------------------

// var date = new Date();
// console.log("current date : " + date)

// var hours = date.getHours();
// date.setHours(hours-1)
// console.log("1 hour ago, it was : "+date);

// -------------------Question (12)------------------------------

// var date = new Date();
// console.log("Current Date : "+ date)
// var year = date.getFullYear();
// date.setFullYear(year-100)
// console.log("100 years back, it was : "+ date);

// -------------------Question (13)------------------------------

// var user_birth_year = prompt("Enter your birth year \n Example : 2005");
// var current_date = new Date();
// var current_year =  current_date.getFullYear();
// var current_age = Math.floor(current_year-user_birth_year);
// console.log("Your birth year is : " + user_birth_year)
// console.log("Your age is : " + current_age)

// -------------------Question (14)------------------------------

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var units = 410;
// var unit_charge = 16;
// var late_charges = 350;

// var date = new Date();

// var total_charges = units*unit_charge;
// var gross_amount_payable = total_charges+late_charges;

// total_charges = total_charges.toFixed(2);
// gross_amount_payable = gross_amount_payable.toFixed(2);
// unit_charge = unit_charge.toFixed(2)
// late_charges = late_charges.toFixed(2)


// console.log("K-Electric Bill :")
// console.log("Customer Name : ABC Customer")
// console.log( "Month : " + months[date.getMonth()] )
// console.log("Number of units : " + units)
// console.log("Charge per unit : " + unit_charge)
// console.log("-----------------------------")


// console.log("Net Amount Payable(within Due Date) : " + total_charges)
// console.log("Late payment surcharges : " + late_charges)
// console.log("Gross Amount Payable(after Due Date) : "+ gross_amount_payable)