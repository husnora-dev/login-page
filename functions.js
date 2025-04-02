// functions

//  function salomBer(){
//     console.log("Hello, World!")
// }

// salomBer();

// function square(n){
//     return n*n
// }

// console.log(square(5))

// function cube(n){
//     return n*n*n
// }
// console.log(cube(6))

// Global Scope
// let name="Ali";
// function hello(){
//     console.log("Hello, "  + name);
// }
// hello(); 

// function isPrime(n) {
//     if (n<2) return false;
//     for(let i =2; i< Math.sqrt(n); i++) {
//         if (n % i ===0) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(isPrime(2))
// console.log(isPrime(1))

// function countDigits(n){
//     return Math.abs(n).toString().length;
// }
// console.log(countDigits(1234))

// function countDigits(n) {
//     if (n===0) return 1;
//     n=Math.abs(n);
//     let count=0;
//     for (; n>0; n=Math.floor(n/10)){
//         count++;
//     }
//     return count;
// }
// console.log(countDigits(12344))

// function trafficLight() {
//     function redLight() {
//         console.log("Red");
//         setTimeout(greenLight, 5000); // Wait for 5 seconds
//     }

//     function greenLight() {
//         console.log(" Green");
//         setTimeout(yellowLight, 3000); // Wait for 3 seconds
//     }

//     function yellowLight() {
//         console.log( "Yellow");
//         setTimeout(redLight, 2000); // Wait for 2 seconds
//     }

//     redLight(); // Start with red light
// }

// trafficLight();


// OBJECT. WAYS TO CREATE AN OBJECT

// 1. Object literal()

// let car={
//     brand:"Tesla",
//     model: "Model S",
//     year: 2024,
//     start: function (){
//         console.log("Car is starting...")

//     }

// };
// console.log(car.brand);
// console.log(car.year);
// car.start();

// let book={
//     title:"Procrastination",
//     year:1996,
//     author:"John",
//     start: function(){
//         console.log("The book is looking for...");
//     }
// };
// console.log(book.title);
// book.start();

// 2. Using new Object()

// let person=new Object();
// person.name="Alice";
// person.age=20;
// person.greet=function(){
//     return `Hello, my name is ${this.name}`
// };
// console.log(person.greet());

// let student=new Object();
// student.name="Husnora";
// student.age=19;
// student.group=102;
// student.greet=function(){
//     return `${this.name} is very smart and capability`
// };
// console.log(student.greet());

// let dress=new Object();
// dress.name="Sharlotte";
// dress.color="white";
// dress.long=200;
// dress.describe=function(){
//     return `Dress name is ${this.name}. It is ${this.color} and its long is ${dress.long}`
// };
// console.log(dress.describe());

// FACTORY FUNCTION

function createPerson(name, age){
    return {
        name,
        age,
        greet() {
            return `Hi, I'm ${this.name}, and I'm ${this.age} years old`
        }
    };
}
let person1=createPerson("Alice", 25);
let person2=createPerson("Bob", 40);
console.log(person1.greet());
console.log(person2.greet());