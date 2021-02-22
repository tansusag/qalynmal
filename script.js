function calculateGroomPrice() { //function
    var price = 500;
  
    //education 
    var education = document.getElementById("education").value;  //conditional
        if(education != "blank" ){
            price *= parseFloat(education);
            document.getElementById("education").style.backgroundColor = "white";
        }
        else {
            document.getElementById("education").style.backgroundColor = "red"; //css manipulation
            document.getElementById("dropdown").append("Укажите образование. "); //html manipulation
        }
        
    

    //get family netWorth 
    var familyNetWorth = document.getElementById("networth").value;
    if(familyNetWorth != "blank" ){ //conditional
        price *= parseFloat(familyNetWorth);
        document.getElementById("networth").style.backgroundColor = "white";
    }
    else {
        document.getElementById("networth").style.backgroundColor = "red";  //css manipulation
        document.getElementById("dropdown2").append("Укажите благосостояние. ") //html manipulation
    }
    
    
    //get skills
    var skills = document.querySelectorAll("#skills input:checked"); // array
      skills.forEach( skill => {
          price += parseFloat(skill.value) ;
         
    })
  

    //get age 
    var ages = document.getElementsByName('age');
    ages.forEach( age => {
        if (age.checked){
            price *= parseFloat(age.value);
        }
        
  })
    
    //get gosssip 
    var gossips = document.querySelectorAll("#gossip input:checked"); //array
    gossips.forEach( gossip => {
        if(gossip.value != '200'){ //conditional with logical operator NOT
            price *= parseFloat(gossip.value) ;
        }
        else{
            price -= parseFloat(gossip.value) ;
        }
        
       
  })
  

      document.getElementById("priceTotal").innerHTML =  Math.round(price)+ '$'; //dom manipulation html
  
    }


  //click to call function
  document.getElementById("submit").onclick = function() { //dom event 
    calculateGroomPrice();
  
  };