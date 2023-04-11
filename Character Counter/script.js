const textAreaEl = document.getElementById("text-el")
const totalCounter = document.getElementById("total-counter")
const remainingCounter = document.getElementById("remaining-counter")


textAreaEl.addEventListener("keyup", function() {
     updateUI();  
});

updateUI(); 


function updateUI(){

     totalCounter.textContent = textAreaEl.value.length;
     remainingCounter.textContent = textAreaEl.getAttribute("maxlength") - totalCounter.textContent

      
}
