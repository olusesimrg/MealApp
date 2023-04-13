
const plus = document.querySelector(".icon");
let inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
const liEm = document.getElementById("li-em")

let list = JSON.parse(localStorage.getItem("list"));

console.log(list)

list.forEach(task => {
	updateTodo(task)
});
console.log(list)

inputEl.addEventListener("keypress", function(e){
	updateTodo(e);
})

function updateTodo(e, task){
	
	if(e.keyCode === 13){
		e.preventDefault();	
		let todoText = inputEl.value
		if(task){
			todoText = task.name;
		}
			inputEl.value = "";
		const liEl = document.createElement("li");
			liEl.innerText = todoText
			ulEl.appendChild(liEl)
			liEl.innerText = todoText
		const span = document.createElement("span");
			span.innerHTML = `  
			<i class="fas fa-trash"></i>
		`
		liEl.appendChild(span)

		liEl.addEventListener("click", ()=> {
			liEl.classList.toggle("connect");
			updateLocalStorage()
		});	

		span.addEventListener("click", ()=> {
			liEl.remove();
			updateLocalStorage();
		});

		updateLocalStorage()
	}	// console.log(todoText)	
}
	
function updateLocalStorage(){
	const liElements = document.querySelectorAll("li");
	list = [];
	//loop through all the li element
	liElements.forEach(liElement =>{
	//create object and push data to the list array
		list.push({
			name: liElement.innerText,
			checked: liElement.classList.contains("connect")
		})	
	})
	localStorage.setItem("list", JSON.stringify(list))
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