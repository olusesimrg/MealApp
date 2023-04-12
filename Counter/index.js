

const saveEl = document.getElementById("save-el")
const countEl = document.getElementById("count-el")
let count = 0

//funtion that does the counting
function increment() {
    count += 1
    countEl.textContent = count
}
//function that save after counting and reset everything back to 0
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
//all the events listener is called in the HTML using onclick attribute

        
