
const plus = document.querySelector(".icon");
let inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
const liEm = document.getElementById("li-em")







inputEl.addEventListener("keypress", function(e){
	updateTodo(e);
})

function updateTodo(e){
	if(e.keyCode === 13){

		e.preventDefault();	
		let todoText = inputEl.value
			inputEl.value = "";
		const liEl = document.createElement("li");
			ulEl.appendChild(liEl)
			liEl.innerText = todoText
		const span = document.createElement("span");
			span.innerHTML = `  
			<i class="fas fa-trash"></i>
		`
		liEl.appendChild(span)

		liEl.addEventListener("click", ()=> {
			liEl.classList.toggle("connect")
		})	
		span.addEventListener("click", ()=> {
			liEl.remove()
		})
	}
		// console.log(todoText)
		
	}
	

//hiding and showing the text input
plus.addEventListener("click", function(){
	inputEl.classList.toggle("input");
	fadeOut()
})


console.log(inputEl)

 function fadeOut(){
	
	let fadeEffect = setInterval(function () {
		if (!inputEl.style.opacity) {
		    inputEl.style.opacity = 1;
		}
		if (inputEl.style.opacity > 0) {
		    inputEl.style.opacity -= 0;
		} else {
		    clearInterval(fadeEffect);
		}
	 }, 200);
	}