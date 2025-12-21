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

