
const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
const minus = document.getElementById("minus");
const spanEl = document.getElementById("span");
const btns = document.querySelectorAll(".btn");

let num = 0;

/*
btns.forEach((btn) =>{
     btn.addEventListener("click", (event) => {
         const styles = event.currentTarget.classList;
         if (styles.contains("bg-green-700")) {
          num ++;
         } else if (styles.contains("bg-red-700")) {
          num --;
         } else if (styles.contains("reset")){
               num = 0;
         }
          spanEl.textContent = num;
          
          if(num > 0){
               spanEl.style.color = "green"
          } else if (num < 0){
               spanEl.style.color = "red"
          }else {
               spanEl.style.color = "black"
          }
     });
});

*/

//additional button
plus.addEventListener("click", () =>{
     num++
     spanEl.textContent = num;
     if (num > 0){
          spanEl.style.color = "green";
     }else if (num ==0){
          spanEl.style.color = "black";
     }
});

//reset button
reset.addEventListener("click", () =>{
     num = 0;
     spanEl.textContent = num;
     if (num == 0){
          spanEl.style.color = "black";
     }
});

//decreament button
minus.addEventListener("click", () =>{
     num--
     spanEl.textContent = num;
     if (num < 0){
          spanEl.style.color = "red";
     }else if(num == 0){
          spanEl.style.color = "black";
     }
});


