'use strict';
var Id=999;//(counter)
        
        function Restaurant(FoodName,FoodID,Price,TypeOfFood)
        {
            this.FoodName=FoodName;
            this.FoodID=FoodID;
            this.Price=Price;
            this.TypeOfFood=TypeOfFood;
            
            this.uniqueId=function(counter){
                this.FoodID=counter +1;
                    ++Id;

            };
        }     
        
        const Restaurant1 =new Restaurant("Burger",0,2.5,"food");
        
        // console.log(Restaurant1);

        Restaurant.prototype.render=function(){
           let table = document.getElementById("myTable");
        //     let row = table.insertRow;

        //    let cell0 = row.insertCell(0);
        //     let cell1 = row.insertCell(1);
        //     let cell2 = row.insertCell(2);
        //     let cell3 = row.insertCell(3);
           
            
                let row =document.createElement("tr");
                table.appendChild(row);
             let cell0 = document.createElement("td");
            let cell1 = document.createElement("td");
            let cell2 = document.createElement("td");
            let cell3 = document.createElement("td");
                     
                    cell0.innerHTML = `${this.FoodID}`;
                    cell1.innerHTML = `${this.FoodName}`;
                    cell2.innerHTML = `${this.TypeOfFood}`;
                    cell3.innerHTML = `${this.Price}`;
                    table.appendChild(cell0);
                    table.appendChild(cell1);
                    table.appendChild(cell2);
                    table.appendChild(cell3);




        }
        let form =document.getElementById('form');
        form.addEventListener("submit",handleFun);

        function handleFun(event){
            event.preventDefault();
            let name=event.target.FoodName.value;
            let price=event.target.Price.value;
            
            let selectedOption = event.target.type.options[type.selectedIndex];
            const selectedText = selectedOption.text;
            // const selectedValue = selectedOption.value;
            console.log(name,price,selectedText);
            const rest =new Restaurant(name,Id,price,selectedText);
            rest.uniqueId(Id);
            rest.render();
        }