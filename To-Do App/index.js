
const plus = document.querySelector(".icon");
let inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const liEm = document.getElementById("li-em");
const formEl = document.getElementById("form");

let list = JSON.parse(localStorage.getItem("list"));

console.log(list)

list.forEach(task => {
	updateTodo(task);
});

console.log(list)

inputEl.addEventListener("keypress", (e) => {
	//updateTodo(task);
	updateTodo(e);
	
})


function updateTodo(e, task){
	if(e.keyCode === 13){
		e.preventDefault();
		let todoText = inputEl.value;

		if(task){
			todoText = task.name;
		};
			inputEl.value = "";
		const liEl = document.createElement("li");
          if(task && task.checked){
			liEl.classList.add("connect");
		}
			liEl.innerText = todoText;
			ulEl.appendChild(liEl);
			liEl.innerText = todoText;
		const span = document.createElement("span");
			span.innerHTML = `  
			<i class="fas fa-trash"></i>
		`
		liEl.appendChild(span);

		liEl.addEventListener("click", ()=> {
			liEl.classList.toggle("connect");
			updateLocalStorage();
		});	

		span.addEventListener("click", ()=> {
			liEl.remove();
			updateLocalStorage();
		});
		updateLocalStorage();
	};
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
		});
	});
	
     //set localstorage items and convert it to string
	localStorage.setItem("list", JSON.stringify(list))
}

//hiding and showing the text input
// plus.addEventListener("click", function(){
// 	inputEl.classList.toggle("input");
// })
