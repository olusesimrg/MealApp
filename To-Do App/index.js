
const plus = document.querySelector(".icon");
let inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el")
const liEm = document.getElementById("li-em")
const formEl = document.getElementById("form")

let list = JSON.parse(localStorage.getItem("list"));

console.log(list)

list.forEach(task => {
	updateTodo(task)
});
console.log(list)

formEl.addEventListener("submit", (e) => {
     e.preventDefault();
	updateTodo();
})

function updateTodo(task){
	
	//if(e.keyCode === 13){
		let todoText = inputEl.value
		if(task){
			todoText = task.name;
		}
			inputEl.value = "";
		const liEl = document.createElement("li");
          if(task && task.checked){
			liEl.classList.add("connect")
		}
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
               if (task){
                    
               }
			updateLocalStorage()
		});	

		span.addEventListener("click", ()=> {
			liEl.remove();
			updateLocalStorage();
		});

		updateLocalStorage()
	}	// console.log(todoText)	
//}
	
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
	inputEl.classList.toggle("input");s
})
