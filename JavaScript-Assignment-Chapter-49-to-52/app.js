// console.log("hello world")

function checkFomData()
{
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var display_box = document.getElementById("display-box");
 
    var validEmail =( email === "shahzaib");
    var validPassword =( password === "123456")

    if(email === "" || password === "")
    {
        display_box.textContent = "Please fill all the feilds"
        return;
    }
    
    if(validEmail && validPassword)
    {
        display_box.textContent = "Login Succusfully"
    }
    else 
    {
        display_box.textContent = "Invalid Email or Password"
    }
       
}

// --------------------Expand Paragraph-------------------------

function expandPara()
{
    

     var hiddenPara = document.getElementById("hiddenPara");
     var toggleButton = document.getElementById("toggleButton")
     if(hiddenPara.style.display === "none")
     {
        hiddenPara.style.display = "inline"
        toggleButton.textContent ="show less"

     }
     else 
     {
        hiddenPara.style.display = "none"
        toggleButton.textContent ="show More"
     }
}

// ------------------------Edit and delete Table data----------------------------------

var userName =  document.getElementById("user-name").value;
var userClass =  document.getElementById("user-class").value;
var userRollNumber =  document.getElementById("user-roll-number").value;

var studentData = [];
function validation(s_name,s_class,s_roll_number)
{
  var empty = "";
  if(s_name === empty || s_class === empty || userRollNumber === s_roll_number)
  {
    
  }
}
function addData()
{
   
}