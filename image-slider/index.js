const imageEl = document.querySelector(".image-container")
const imgAll = document.querySelectorAll("img");
const previousEl = document.querySelector(".left")
const nextEl = document.querySelector(".right")

let currentImg = 1
let timeout;

//add event listener to the next btn 
nextEl.addEventListener("click", () =>{
     currentImg++
     clearTimeout(timeout)
     updateImage();
})
//add event listener to the previous btn 
previousEl.addEventListener("click", () =>{
     currentImg--
     clearTimeout(timeout)
     updateImage();
})
 //call the updateimage to run without clicking the nexxt or previous btn
updateImage()

function updateImage(){
     // if current image is more than image length, set current image back to 1
     if (currentImg > imgAll.length){
         currentImg = 1;      
     }else if (currentImg < 1){
          // if current image is less than 1, set current image to image.length
          currentImg = imgAll.length
     }

     //add transform style to the image containter elements
     imageEl.style.transform = `translateX(-${(currentImg - 1) * 900}px)`

//set timeout to change the image dynamically
    timeout = setTimeout(()=>{
          currentImg++
          updateImage()
     }, 3000);
};