'use strict';
var Id=999;//(counter)
        const Array=[];
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
        ////////////////savedata
        function saveData(data){
            let stringObj=JSON.stringify(data);
            localStorage.setItem("The food is",stringObj);
            
           }

          
                            
                             

           /////////////////////////////form event                  

        let form =document.getElementById('form');
           form.addEventListener("submit",handleFun);
        function handleFun(event){
            event.preventDefault();
            let name=event.target.FoodName.value;
            let price=event.target.Price.value;
            
            let selectedOption = event.target.type.options[type.selectedIndex];
            const selectedText = selectedOption.text;
            
           // console.log(name,price,selectedText);
            const rest =new Restaurant(name,Id,price,selectedText);
            rest.uniqueId(Id);
            Array.push(rest);
            saveData(Array);
            
        }
       
       
       
       