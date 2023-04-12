
const inputEl = document.querySelector(".input")
const copyEl = document.querySelector(".fa-copy")
const btnEl = document.querySelector(".btn")
const alert = document.querySelector(".alert-container")

btnEl.addEventListener("click", () =>{
     createPassword()
})

function createPassword(){
     const characters = "0123456789abcdfeghijklmnopqrstuvwxyz!@#$%^&*()_+:{}ABCDEFGHIJKLMNOPQRSTUVWXYZ"

     const passwordLength = 15;
     let password = ""

     for (let i = 0; i < passwordLength; i++){ 

          const randomNum = Math.floor(Math.random() * characters.length) 

          password += characters.substring(randomNum, randomNum + 1)  

          inputEl.value = password
          alert.textContent = password + " copied!"

          //console.log(password)
          //console.log(randomNum)
     };
}


//event listener to listen to click and copy the password
copyEl.addEventListener("click", function(){
          copyPassword();
          //if there is a value run add and remove active class
     if(inputEl.value){ 
          alert.classList.remove("active")
          setTimeout(() => {
          alert.classList.add("active")
          }, 2000);
     }
     
});

function copyPassword(){
      //to select the password generated
      inputEl.select();
      inputEl.setSelectionRange(0, 999);
      //to copy the password generated
      navigator.clipboard.writeText(inputEl.value);

      
}
