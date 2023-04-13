
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
		ulEl.innerHTML += `
			<li id="li-em"><span> <i class="fas fa-trash"></i>
			</span> ${todoText} 
			</li>
		`
		console.log(todoText)
	}
	
	
}

//addin line through and changin the color to gray
ulEl.addEventListener("click", function(){
	//for(let i = 0; i < )
	ulEl.classList.toggle("connect")
})
// $("ul").on("click", "li", function(){
// 	$(this).toggleClass("connect");
// });

//creating a new li and add to the ul

// $("input[type='text']").keypress(function(e){
// 	if(e.which === 13){
// 		var todoText = $(this).val();
// 		$(this).val("");
// //creating a new li and add to the ul
// 		$("ul").append('<li><span><i class="fas fa-trash"></i></span>' + todoText + '</li>');
// 	}
// });

// creating the delate button

ulEl.addEventListener("click", function(){

// $("ul").on("click", "span", function(event){
// 	$(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// });
});

//hiding and showing the text input
plus.addEventListener("click", function(){
	inputEl.classList.toggle("input");
	fadeOut()
})




// $(".icon").click(function(){
// 	$("input[type='text']").fadeToggle(700);
// });
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