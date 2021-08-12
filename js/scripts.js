function newItem(){

    //javascript
    //1. Adding a new item to the list of items: 
    //let li = document.createElement("li");
        let li = $('<li></li>');
    //let inputValue = document.getElementById("input").value;
        let inputValue= $('#input').value(); 
    //let text = document.createTextNode(inputValue);
    //li.appendChild(text);
        li.append(inputValue);
    
        if (inputValue === '') {
            alert('You must write something!');
        } else {
            $('#list').append(li);
        }
        
        //2. Crossing out an item from the list of items:
        function crossOut() {
                li.toggleClass('.strike');
            }
            li.on('dblclick', function (crossOut(){
                li.toggleClass('.strike');
            });
        

            
        //3(i). Adding the delete button "X": 
        /*let crossOutButton = document.createElement("crossOutButton");
            crossOutButton.appendChild(document.createTextNode("X"));
            li.appendChild(crossOutButton);
            crossOutButton.addEventListener("click", deleteListItem);
            */ 


        let crossOutButton = $('<crossOutButton> </crossOutButton>');
            deleteButton.appendChild (document.createTextNode('X'));
            li.append(crossOutButton); 

        crossOutButton.on('click', deleteListItem);
        //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
        /*function deleteListItem(){
                li.classList.add("delete")
            }*/
        
        function deleteListItem(){
            li.addClass('deleted')
        }
           

        // 4. Reordering the items: 
        $('#list').sortable();
        
    
        
     
    
    
    
    