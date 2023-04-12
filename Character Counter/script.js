const textAreaEl = document.getElementById("text-el")
const totalCounter = document.getElementById("total-counter")
const remainingCounter = document.getElementById("remaining-counter")

//add event listener
textAreaEl.addEventListener("keyup", function() {
     //when click run updateUI function
     updateUI();  
});

//calling the function to refresh everything back to Zero
updateUI(); 


function updateUI(){
     //picking the value length of our textarea putting it in to our totalcounter
     totalCounter.textContent = textAreaEl.value.length;
     //we get the maxlength attribute using .getattribute and minus it from totalcounter 
     remainingCounter.textContent = textAreaEl.getAttribute("maxlength") - totalCounter.textContent

      
}
