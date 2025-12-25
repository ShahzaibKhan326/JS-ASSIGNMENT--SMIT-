// console.log("Hello world!")

// ---------------------Accessing Table-------------------------------

// ------------(Checking Row in a Table)------------------->

// const table = document.querySelector("#myTable");
// console.log(table.rows.length);

// ------------(Adding a Row dynamically)------------------->

// function addRow()
// {
//     const  table = document.querySelector("#myTable");
//     const row = table.insertRow();

//     row.insertCell(0).textContent ="shahzaib";
//     row.insertCell(1).textContent ="20";
//     row.insertCell(2).textContent ="2354";
//     row.insertCell(3).textContent =""
// }

// ------------(Adding 3 Rows using loop)--------------------------------

// function addRow()
// {
//        const table = document.querySelector("#myTable");
        
  
//      for(let i = 0 ; i < 3 ;i++)
//      {
      
//       const row = table.insertRow();
    
//       for(let j = 0 ; j < 4 ; j++)
//       {
//         row.insertCell(j).textContent ="";
//       }

//      }

// }

// ------------(Adding rows from input fields)--------------------------------

// function addData()
// {
//   let name = document.getElementById("name").value;
//   let cls = document.getElementById("class").value;
//   let age = document.getElementById("age").value;

//   const table = document.getElementById("mytable");
//   const row = table.insertRow();
//   row.innerHTML = `<td>${name}</td> <td>${cls}</td> <td>${age}</td>`;
// }