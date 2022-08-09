'use strict';
var Id=999;//(counter)
////////////////////////////Get data
let originalData=[];
        
function getData(){
 let retData=localStorage.getItem("The food is");
  originalData=JSON.parse(retData);
  
  return originalData;
                  }


 
 //////////////////////table
 var x =5;
 let obj=[];
 console.log(getData());
 obj=getData();
render();
 ////////////////////id
 

function render(){
    let table = document.getElementById("myTable");
    for (let i = 0; i < obj.length; i++) {
        let j = obj[i];
     let row =document.createElement("tr");

     table.appendChild(row);
    
     let cell0 = document.createElement("td");
     let cell1 = document.createElement("td");
     let cell2 = document.createElement("td");
     let cell3 = document.createElement("td");
              
     cell0.textContent=j.FoodId;
     cell1.textContent=j.FoodName;
     cell2.textContent=j.TypeOfFood;
     cell3.textContent=j.Price;
             row.appendChild(cell0);
             row.appendChild(cell1);
             row.appendChild(cell2);
             row.appendChild(cell3);
             
 }
}
 
