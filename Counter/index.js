const plus = document.getElementById("plus");
const reset = document.getElementById("reset");
const minus = document.getElementById("minus");
const spanEl = document.getElementById("span");

let num = 0;

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
})


