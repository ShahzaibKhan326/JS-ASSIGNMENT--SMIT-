// ----------------------Chapter (21-To-25)-------------------------

// -------------Question (1)----------------------------

// var user_first_name = prompt("Enter your first name:")
// var user_last_name = prompt("Enter your last name:")
// console.log(user_first_name+ " "+ user_last_name)

// -------------Question (2)----------------------------

// var user_text = prompt("Enter your favorite mobie phone model");
// var user_text_length = user_text.length;
// console.log(user_text)
// console.log("length of your string : " +  user_text_length)

// -------------Question (3)----------------------------

// var country = "Pakistani";
// var country_index =  country.indexOf('n');
// console.log("Index of 'n' : " + country_index)

// -------------Question (4)----------------------------


// var greeting = "Hello World";
// console.log(greeting);
// var greeting_index =  greeting.lastIndexOf('l');
// console.log("Index of 'l' : " + greeting_index);

// -------------Question (5)----------------------------

// var country_people = "pakistani";
// console.log("String : "+country_people);
// var index_03 = country_people.charAt(3);
// console.log("Character at index 3 : "+index_03)

// -------------Question (6)----------------------------


// var user_first_name = prompt("Enter your first name:")
// var user_last_name = prompt("Enter your last name:")
// var full_name = user_first_name.concat("",user_last_name)
// console.log(full_name)

// -------------Question (7)----------------------------

// var  city = "Hyderbad";
// console.log("City :" + city)
// var replace_city =  city.replace("Hyder","Islama")
// console.log("After Replacement : "+replace_city);

// -------------Question (8)----------------------------

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// var replace_words = message.replace(/and/g , "&")
 
// console.log(replace_words);

// -------------Question (9)----------------------------

// var str_number = "472";
// console.log("Value : "+str_number);
// console.log("Type : "+ typeof str_number);
// var num  = Number(str_number);
// console.log("Value : "+num)
// console.log("Type : " + typeof num)

// -------------Question (10)----------------------------

// var userInput = prompt("Enter a Word to to convert it to UpperCase!")
//  userInput_capital = userInput.toUpperCase();
//  console.log("Input : "+userInput);
//  console.log("Output : "+userInput_capital);

// -------------Question (11)----------------------------

// var userInput = prompt("Enter a Word to to convert it to Title-Case!")
//  console.log("User-Input : " + userInput)
//  var firstChar = userInput.slice(0,1);
//  var otherChar = userInput.slice(1)

//  var firstChar_capital = firstChar.toUpperCase();
//  var otherChar_lower = otherChar.toLowerCase();

//  var title_case = firstChar_capital + otherChar_lower;
//  console.log("Output : "+title_case);

// -------------Question (12)----------------------------

// var  num = 35.36;
//  console.log("Actual Value : "+num)
//  console.log("Actual Type : " + typeof num)
// var num_string = num.toString();
// num_string = num_string.replace(".","")
// console.log("After Value : " + num_string)
// console.log("After Type : " + typeof num_string )

// -------------Question (13)----------------------------

// var user_name = prompt("Enter your name");
// var isValid =true;
// for(var i= 0; i<user_name.length;i++ )
// {
//     var code = user_name.charCodeAt(i);
//     if(code === 33 || code === 44 || code === 46 || code === 64)
//     {
//        isValid=false;
//     }
// }

// if(isValid)
// {
//     console.log("your word is valid ")
// }
// else 
// {
//     console.log("your word is not valid ")
// }

// -------------Question (14)----------------------------

// var Bakery_items = ["cake","apple pie","cookie","chips","patties"];
// console.log("Bakery Item : " + Bakery_items );
// var user_item = prompt("Avaiable items : (cake , apple pie ,cookie , chips , patties)\n Enter to search from above or else");
// var user_item= user_item.toLowerCase();
// var user_item_index = Bakery_items.indexOf(user_item)
// if (user_item_index !== -1)
// {
//      console.log("Your item is found in the list ")
//      console.log("At Index : " + user_item_index)
// }
// else
// {
//      console.log("Your item is not found in the list. ")
    
// }

// -------------Question (15)----------------------------

// var user_input =  prompt("Enter a strong password");

var user_input = "shahzaib";
// var isValid =true;
var firstChar = user_input.charAt(0)
// console.log(firstChar)

for(var i = 0 ; i <user_input.length; i++)
{
    var code = user_input.charCodeAt(i)
    if(firstChar.charCodeAt(0) >= 48 && firstChar.charCodeAt(0) <=57)
    {
        console.log("Password can not start with a numner!")
        break;
    }
    else if(code >= 65 && code <=90 || code >= 97 && code <=122 )
      {
        if(user_input.length === 6)
        {
           console.log("true")
        }
        else
        {
            console.log("false")
        }
      }
    else
        {
        console.log("Unvalid password!")

    }
}
// console.log(code)