// Task 1: Code a Person class
class Person { 
     constructor(name = "Tom", age = 20, energy = 100)
 {
     this.name = name;
     this.age = age;
     this.energy = energy;
 }        
     sleep() {
         this.energy += 10;
     }

     sleep(){
          this.energy += 20;
     }
     doSomethingFun() {
         this.energy -= 10;
     }
 }
 
 // Task 2: Code a Worker class
 class Worker extends Person {    
 constructor(name, age, energy, xp = 0,hourlyWage = 10, )    
 {
     super(name, age, energy);
     this.xp = xp;
     this.hourlyWage = hourlyWage;    
 }    
     goToWork() {        
     this.xp += 10;    
 } 
 }
 
 // Task 3: Code an intern object, run methods
 function intern() {  
 const internObject = new Worker("Bob", 21, 110, 0, 10);
 internObject.goToWork()        
 return internObject;
 }
 
 // Task 4: Code a manager object, methods
 function manager() {    
 
     const managerObject = new Worker("Alice", 30, 120, 100, 30);
     managerObject.doSomethingFun()        
     return managerObject    
 }
 
 
 console.log(intern());
 console.log(manager());

 /// example 5
 
 class Animal {

 }
 class Dog extends Animal {
     constructor() {
         this.noise = "bark";
     }
     makeNoise() {
       return this.noise;
     }
 }
 class Wolf extends Dog {
     constructor() {
         super();
         this.noise = "growl";
     }
 }

 var result = new Wolf();
 console.log(result.makeNoise());

// Array and object iterations (coursera js course)
// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy() {
    for (item of dairy) {
        console.log(item)
    }
}
logDairy()

// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal)
bird.canFly = true
bird.hasFeathers = true

function birdCan() {
    for (item of Object.keys(bird)) {
        console.log(item,': ',bird[item])
    }
}

birdCan()
// Task 3
function animalCan() {
    for (item in bird) {
        console.log(item,': ',bird[item])
    }
}

animalCan()

 