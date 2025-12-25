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

var selectedRow = null;
function addStudent()
{
    var StudentName = document.getElementById("name").value;
    var className = document.getElementById("class").value;
    var rollNumber = document.getElementById("roll-number").value;

    var table = document.getElementById("student-table");
    var row = table.insertRow();

    row.insertCell(0).innerHTML =  StudentName;
    row.insertCell(1).innerHTML =  className;
    row.insertCell(2).innerHTML =  rollNumber;
    row.insertCell(3).innerHTML = 
    "<button onclick='editRow(this)'>Edit</button>" +
    "<button onclick='deleteRow(this)'>Delete</button>" ;

    document.getElementById("name").value="";
    document.getElementById("class").value="";
    document.getElementById("roll-number").value="";
}

function deleteRow(btn)
{
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row)
}

function editRow(btn)
{
    selectedRow = btn.parentNode.parentNode;

    document.getElementById("editName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("editClass").value = selectedRow.cells[1].innerHTML;
    document.getElementById("editRollNumber").value = selectedRow.cells[2].innerHTML;
    
    document.getElementById("editForm").style.display ="block";
}

function updateStudent()
{
        selectedRow.cells[0].innerHTML = document.getElementById("editName").value;
        selectedRow.cells[1].innerHTML = document.getElementById("editClass").value;
        selectedRow.cells[2].innerHTML = document.getElementById("editRollNumber").value;

        document.getElementById("editForm").style.display = "none";
}