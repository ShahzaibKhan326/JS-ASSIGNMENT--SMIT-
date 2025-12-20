// console.log("hello world")

function checkFomData()
{
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    if(email === "")
    {
       var message = "Please Enter valid Password and Email";
       console.log(message)
    }
}